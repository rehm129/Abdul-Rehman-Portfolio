import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function ThreeHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Test WebGL capability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.035);

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 14 : 11;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Particle field
    const particleCount = prefersReducedMotion ? 60 : isMobile ? 150 : 380;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPurple = new THREE.Color(0x7c3aed);
    const colorCyan = new THREE.Color(0x22d3ee);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;

      const mixedColor = Math.random() > 0.6 ? colorCyan : Math.random() > 0.3 ? colorPurple : colorWhite;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.08 : 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Subtle 3D Abstract Object (Fluid Torus Knot with metallic wireframe look)
    const knotGeometry = new THREE.TorusKnotGeometry(
      isMobile ? 1.6 : 2.1,
      isMobile ? 0.45 : 0.55,
      isMobile ? 64 : 100,
      16,
      2,
      3
    );

    const knotMaterial = new THREE.MeshStandardMaterial({
      color: 0x0e0e14,
      roughness: 0.25,
      metalness: 0.85,
      wireframe: true
    });

    const knot = new THREE.Mesh(knotGeometry, knotMaterial);
    knot.position.set(isMobile ? 0 : 2.8, isMobile ? -1 : 0.2, -1);
    scene.add(knot);

    // Inner glowing core
    const coreGeometry = new THREE.IcosahedronGeometry(isMobile ? 0.9 : 1.2, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    knot.add(coreMesh);

    // Subtle Atmospheric Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0x7c3aed, 4.5, 30);
    purpleLight.position.set(5, 5, 4);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x22d3ee, 3.5, 30);
    cyanLight.position.set(-5, -4, 3);
    scene.add(cyanLight);

    // Pointer Interaction Handling
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 2;
      targetMouseY = -y * 2;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Window Resize handling with ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      if (!prefersReducedMotion) {
        // Rotate abstract object gently
        knot.rotation.x = elapsedTime * 0.12 + currentMouseY * 0.4;
        knot.rotation.y = elapsedTime * 0.16 + currentMouseX * 0.5;

        coreMesh.rotation.y = -elapsedTime * 0.2;

        // Subtle particle drift
        particles.rotation.y = elapsedTime * 0.02 + currentMouseX * 0.05;
        particles.rotation.x = currentMouseY * 0.05;

        // Light shift with cursor
        purpleLight.position.x = 4 + currentMouseX * 3;
        purpleLight.position.y = 4 + currentMouseY * 3;
        cyanLight.position.x = -4 - currentMouseX * 3;
        cyanLight.position.y = -4 - currentMouseY * 3;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Clean up Three.js memory safely
      particleGeometry.dispose();
      particleMaterial.dispose();
      knotGeometry.dispose();
      knotMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Ambient gradient layer backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] z-10 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[450px] h-[450px] bg-[#7C3AED]/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-[380px] h-[380px] bg-[#22D3EE]/08 rounded-full blur-[100px] pointer-events-none" />

      {/* Fallback for when WebGL is unavailable */}
      {!hasWebGL && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-96 h-96 rounded-full border border-purple-500/30 animate-pulse" />
        </div>
      )}
    </div>
  );
}
