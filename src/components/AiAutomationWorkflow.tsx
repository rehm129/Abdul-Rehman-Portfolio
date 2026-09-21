import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Database, Bot, Zap, Mail, Calendar, UserPlus, CheckCircle, ChevronRight, Activity } from 'lucide-react';

interface NodeDetail {
  id: string;
  name: string;
  icon: any;
  status: string;
  action: string;
  payload: string;
  tech: string;
}

const NODES: NodeDetail[] = [
  {
    id: 'lead',
    name: 'LEAD INGESTION',
    icon: UserPlus,
    status: 'Captured',
    action: 'Webhook triggered from landing page form or API event',
    payload: '{ source: "web_inquiry", tier: "enterprise", intent: "high" }',
    tech: 'Webhook / REST API'
  },
  {
    id: 'ai-analysis',
    name: 'AI ANALYSIS',
    icon: Bot,
    status: 'Evaluated',
    action: 'Natural language parsing & qualification against criteria',
    payload: '{ score: 94, budgetMatch: true, priority: "URGENT" }',
    tech: 'LLM Prompt Model'
  },
  {
    id: 'automation',
    name: 'AUTOMATION ROUTER',
    icon: Zap,
    status: 'Dispatched',
    action: 'Dynamic conditional path routing based on qualification',
    payload: '{ branch: "vip_direct_booking", sla: "10_mins" }',
    tech: 'n8n / Node Orchestrator'
  },
  {
    id: 'crm',
    name: 'CRM RECORD SYNC',
    icon: Database,
    status: 'Synchronized',
    action: 'Create client record, populate custom fields, and assign tags',
    payload: '{ crmId: "rec_923841", stage: "Discovery Call Pending" }',
    tech: 'CRM Pipeline API'
  },
  {
    id: 'email',
    name: 'DISPATCH EMAIL',
    icon: Mail,
    status: 'Delivered',
    action: 'Send contextual customized briefing & booking invitation',
    payload: '{ template: "executive_intro", opened: true }',
    tech: 'SMTP / Lifecycle Drip'
  },
  {
    id: 'followup',
    name: 'SMART FOLLOW-UP',
    icon: Calendar,
    status: 'Scheduled',
    action: 'Autonomous schedule monitor & adaptive follow-up reminders',
    payload: '{ nextPing: "T+48h", condition: "if_unconfirmed" }',
    tech: 'Cron Automation Logic'
  }
];

export function AiAutomationWorkflow() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(1);
  const [autoCycle, setAutoCycle] = useState(true);

  useEffect(() => {
    if (!autoCycle) return;
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % NODES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [autoCycle]);

  const activeNode = NODES[activeNodeIndex];

  return (
    <div className="w-full my-16 p-6 sm:p-10 rounded-3xl bg-[#09090D] border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-10 left-1/3 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-[#22D3EE]/08 rounded-full blur-3xl pointer-events-none" />

      {/* Header with clear CONCEPT label */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-widest bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#22D3EE]">
              AI AUTOMATION / CONCEPT
            </span>
            <span className="flex items-center space-x-1 text-[11px] font-mono text-zinc-400">
              <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>LIVE SIGNAL ARCHITECTURE</span>
            </span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight mt-2">
            AUTONOMOUS QUALIFICATION & CRM ENGINE
          </h3>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="text-zinc-500">CYCLE SIMULATION:</span>
          <button
            onClick={() => setAutoCycle(!autoCycle)}
            className={`px-3 py-1 rounded-full border text-[11px] font-mono transition-colors ${
              autoCycle
                ? 'border-[#22D3EE]/40 bg-[#22D3EE]/10 text-cyan-300'
                : 'border-zinc-700 bg-zinc-900 text-zinc-400'
            }`}
          >
            {autoCycle ? 'AUTO (RUNNING)' : 'PAUSED'}
          </button>
        </div>
      </div>

      {/* Visual Pipeline Nodes Flow */}
      <div className="relative z-10 py-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 relative">
          {NODES.map((node, index) => {
            const Icon = node.icon;
            const isActive = index === activeNodeIndex;
            const isCompleted = index < activeNodeIndex;

            return (
              <div key={node.id} className="relative flex flex-col items-center">
                {/* Node Box */}
                <button
                  onClick={() => {
                    setAutoCycle(false);
                    setActiveNodeIndex(index);
                  }}
                  className={`w-full p-4 rounded-xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer border ${
                    isActive
                      ? 'bg-[#14141E] border-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,0.25)]'
                      : isCompleted
                      ? 'bg-[#101014] border-[#7C3AED]/40 hover:border-white/20 text-zinc-300'
                      : 'bg-[#0B0B0F] border-white/5 hover:border-white/15 text-zinc-500'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 transition-colors ${
                      isActive
                        ? 'bg-[#22D3EE]/20 text-[#22D3EE]'
                        : isCompleted
                        ? 'bg-[#7C3AED]/20 text-purple-300'
                        : 'bg-white/[0.03] text-zinc-500'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono text-zinc-500 mb-0.5">
                    STEP 0{index + 1}
                  </span>
                  <span
                    className={`font-display text-xs font-semibold tracking-wide ${
                      isActive ? 'text-white' : 'text-zinc-400'
                    }`}
                  >
                    {node.name.split(' ')[0]}
                  </span>
                </button>

                {/* Connector Arrow for desktop */}
                {index < NODES.length - 1 && (
                  <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-zinc-700">
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#22D3EE] animate-pulse' : ''}`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Telemetry Inspector Panel */}
      <div className="relative z-10 p-5 rounded-2xl bg-[#0F0F16] border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono">
        <div className="flex items-start space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#22D3EE] mt-1 shrink-0 animate-ping" />
          <div className="flex flex-col">
            <span className="text-[11px] text-[#8B5CF6] uppercase font-bold tracking-wider">
              INSPECTING: {activeNode.name}
            </span>
            <span className="text-zinc-200 text-sm font-sans mt-0.5">
              {activeNode.action}
            </span>
            <span className="text-zinc-500 text-[11px] mt-1">
              Technology: {activeNode.tech}
            </span>
          </div>
        </div>

        {/* Telemetry Output Box */}
        <div className="w-full md:w-auto p-3 rounded-lg bg-black/60 border border-white/5 font-mono text-[11px] text-[#22D3EE] overflow-x-auto">
          <code>{activeNode.payload}</code>
        </div>
      </div>
    </div>
  );
}
