
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronDown,
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  Zap, 
  Star,
  TrendingUp,
  Microscope,
  Award,
  ListChecks,
  Target as TargetIcon,
  Quote,
  MoveDown,
  Info,
  Sparkles,
  Search,
  BookOpen,
  Briefcase,
  Trophy,
  Activity,
  Compass,
  Users,
  Layers,
  FileText,
  GraduationCap,
  School,
  Clock,
  ClipboardList,
  FlaskConical,
  Beaker,
  FileSearch,
  BookMarked,
  PenTool,
  SearchCheck,
  CalendarDays,
  ShieldCheck,
  Headphones,
  BookCheck,
  Target
} from 'lucide-react';
import { DILEMMAS, MODULES, PHASES, PHILOSOPHY_PILLARS, PHILOSOPHY_VALUES } from './constants.tsx';
import { Dilemma, ServiceModule, Phase } from './types.ts';

const scrollToSection = (id: string) => {
  const element = document.getElementById('root');
  if (element) {
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }
};

const Navbar = () => (
  <nav className="fixed top-0 w-full z-[100] glass-nav">
    <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
      <div className="flex justify-between h-20 items-center">
        <div 
          className="flex items-center gap-5 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Logo 图片替换 */}
          <div className="h-14 w-auto flex items-center">
            <img 
              src="https://fcdn.goodq.top/caches/3cb5b03497565874ddc4220e24244551/aHR0cHM6Ly93d3cuc2VleW9vZWR1LmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMjQvMTEvODdkMmZlN2ViZDA5MDMwYzY3ZTY5NjNkMDMzNjQ0ZDktMzAweDExMy05MC53ZWJw.webp" 
              alt="榕树国际 Logo" 
              className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                // 如果图片路径失效，回退到一个占位图标
                e.currentTarget.src = "https://via.placeholder.com/150x50?text=LOGO";
              }}
            />
          </div>
          
          <div className="border-l border-slate-200 pl-5 py-1">
            <span className="serif font-bold text-xl tracking-tighter block uppercase text-slate-900">留学多元规划</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-amber-600 block font-black leading-none mt-1.5">Multi-Admission Planning Service</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center space-x-12 text-[16px] text-slate-800">
          {[
            { id: 'dilemmas', label: '·解决的困境' },
            { id: 'definition', label: '·什么是多元申请规划' },
            { id: 'modules', label: '·四大模块' },
            { id: 'process', label: '·服务流程' }
          ].map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className="hover:text-amber-600 transition-colors relative group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button className="hidden md:block bg-slate-900 text-white px-8 py-3 rounded-none text-[13px] font-black uppercase tracking-[0.25em] hover:bg-amber-600 transition-all shadow-premium">
          为了更好就业
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-24 pb-12">
    <div className="max-w-screen-2xl mx-auto px-8 lg:px-16 w-full grid lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-8 relative z-10">
        <div className="mb-10 flex items-center gap-6">
          <div className="h-px w-16 bg-amber-600"></div>
          <span className="text-[18px] font-black uppercase tracking-[0.3em] text-amber-700">多元申请规划@2026 - 真正务实的规划 为了更好就业 </span>
        </div>
        <h1 className="serif text-[20px] md:text-[48px] font-bold text-slate-900 leading-[1.2] mb-12 tracking-tighter">
          解决本科生申请中的三大困境: <br />
          <span className="text-amber-600 relative leading-[1.0]">
            不知道留学申什么方向<br />
            不清楚如何就业<br />
            不明白应该怎么做准备<br />
          </span>
        </h1>
        <p className="text-[20px] text-white max-w-2xl leading-relaxed mb-16 font-light serif bg-amber-600 px-2 py-1 rounded-sm">
          读研是为了好就业、高薪资就业 - 这是多元申请规划的核心目标<br/>从认知到执行，系统化规划，让每一步都朝着理想就业前进
        </p>
        <div className="flex flex-wrap items-center gap-10">
          <button 
            onClick={() => scrollToSection('process')}
            className="group flex items-center gap-6 serif font-bold text-2xl hover:text-amber-600 transition-all"
          >
            开启规划旅程 
            <div className="w-20 h-20 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-white transition-all duration-700 shadow-premium">
              <ArrowRight className="w-8 h-8" />
            </div>
          </button>
        </div>
      </div>
      
      <div className="lg:col-span-4 relative flex justify-end">
        <div className="relative">
          <div className="w-[340px] h-[520px] bg-slate-200 overflow-hidden shadow-premium relative group">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
              alt="Editorial" 
            />
            <div className="absolute inset-0 border-[20px] border-white pointer-events-none"></div>
          </div>
          <div className="absolute -top-8 -right-8 w-48 h-48 bg-amber-600/5 backdrop-blur-3xl rounded-full -z-10 animate-pulse"></div>
          
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
      <MoveDown className="text-slate-300 w-6 h-6" />
    </div>
  </header>
);

const DilemmaCard: React.FC<{ dilemma: Dilemma, index: number, className?: string }> = ({ dilemma, index, className = "" }) => (
  <div className={`group relative bg-white border border-slate-100 p-5 lg:p-6 transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden shadow-sm h-full ${className}`}>
    <div className="display italic absolute -bottom-4 -right-2 text-[8rem] font-black text-slate-200/40 select-none pointer-events-none z-0 group-hover:text-amber-600/10 group-hover:scale-110 transition-all duration-1000 leading-none">
      0{index + 1}
    </div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-3">
        <div className={`shrink-0 p-1.5 shadow-sm transform transition-transform group-hover:rotate-12 group-hover:scale-110 duration-500 ${
          index === 0 ? 'bg-amber-600' : 
          index === 1 ? 'bg-emerald-600' : 
          index === 2 ? 'bg-orange-600' : 
          index === 3 ? 'bg-purple-600' : 'bg-rose-600'
        }`}>
          {React.cloneElement(dilemma.icon as React.ReactElement<any>, { className: 'w-4 h-4 text-white' })}
        </div>
        
        <h3 className="serif text-[17px] font-black text-slate-900 tracking-tight leading-tight group-hover:text-amber-700 transition-colors">
          困境{index === 0 ? '一' : index === 1 ? '二' : index === 2 ? '三' : index === 3 ? '四' : '五'}：{dilemma.title}
        </h3>
      </div>
      
      <div className="h-[2px] w-6 bg-amber-600/30 mb-3 group-hover:w-12 group-hover:bg-amber-600 transition-all duration-700"></div>

      <p className="text-slate-900 font-medium text-[14px] lg:text-[15px] leading-relaxed serif italic opacity-95 group-hover:opacity-100 transition-opacity flex-1 overflow-hidden">
        {dilemma.description}
      </p>
      
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex justify-end">
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
      </div>
    </div>
  </div>
);

const FinanceSample = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mt-12 lg:mt-16 bg-white overflow-hidden transition-all duration-500">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between bg-slate-900 text-white group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-12 h-12 bg-amber-600 flex items-center justify-center shrink-0 shadow-lg">
             <Trophy className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 block mb-1">Detailed Sample</span>
            <h5 className="serif text-xl lg:text-3xl font-bold tracking-tight">查看服务样本：金融专业 - 经济金融类方向</h5>
          </div>
        </div>
        <div className={`transition-all duration-500 transform ${isOpen ? 'rotate-180 text-amber-500 scale-110' : 'text-slate-500 group-hover:text-amber-600'}`}>
           <ChevronDown className="w-10 h-10" />
        </div>
      </button>
    </div>
  );
};

const ModuleSection = () => (
  <section id="modules" className="pt-24 pb-12 bg-white overflow-hidden">
    <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
      <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-amber-600"></div>
            <span className="text-amber-700 font-black uppercase tracking-[0.4em] text-[10px]">Strategic Framework</span>
          </div>
          <h2 className="serif text-5xl lg:text-7xl font-bold text-slate-900 leading-none">
            四大专家级<br /><span className="text-slate-300 italic">规划系统</span>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <div className="p-4 lg:p-6 bg-[#fdfcf8] border-r-4 border-amber-600 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Sparkles className="w-12 h-12 text-amber-600" />
            </div>
            <p className="text-slate-800 font-bold italic text-lg lg:text-xl leading-relaxed relative z-10">
              针对不同维度的痛点，由行业专家和名校导师<br />提供深度规划辅导
            </p>
          </div>
        </div>
      </div>

      {/* Module 01 Detail */}
      <div className="bg-[#fdfcf8] editorial-border relative group mb-24">
        <div className="absolute top-0 right-0 p-8 serif text-[12rem] font-black text-slate-100/40 select-none group-hover:text-amber-100 transition-colors pointer-events-none leading-none">01</div>
        <div className="relative z-10 p-10 lg:p-16">
          <div className="flex flex-wrap items-center gap-10 mb-12">
            <div className="bg-slate-900 p-4 shadow-xl"><Briefcase className="text-white w-8 h-8" /></div>
            <div>
              <h3 className="serif text-4xl font-bold text-slate-900 mb-2">模块 1：就业认知与实习规划</h3>
              <p className="text-amber-600 font-black uppercase tracking-widest text-xs">Module 01: Employment Cognition & Internship</p>
            </div>
            <div className="lg:ml-24 flex items-start gap-4 bg-white border border-amber-500/10 px-8 py-5 shadow-lg relative z-20">
              <Users className="w-5 h-5 text-amber-600 mt-1" />
              <div className="text-left flex flex-col gap-1">
                <span className="block text-[11px] font-black uppercase text-amber-600 tracking-widest">服务提供者：</span>
                <div className="flex items-center gap-2">
                  <span className="block text-lg font-bold text-slate-900 leading-tight">该申请方向在该行业的资深从业者（5-10年经验）</span>
                  <span className="text-slate-200 font-light">|</span>
                  <span className="text-base font-medium text-slate-500 whitespace-nowrap">一对一深度沟通</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-12">
              <div className="bg-white border border-slate-100 p-8 shadow-sm mb-12">
                <div className="flex items-center gap-4 mb-8">
                   <HelpCircle className="text-amber-600 w-5 h-5" />
                   <h4 className="serif text-2xl font-bold text-slate-900">解决什么问题？</h4>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { q: '这个专业好就业吗？', a: '毕业后能去哪些企业、岗位？这些行业待遇怎么样？能赚到钱吗？' },
                    { q: '工作压力大吗？', a: '工作强度如何？适合什么样的人？我到底适不适合这个行业？' },
                    { q: '用人要求高吗？', a: '目标企业的用人要求是什么？对学校排名有限制吗？' },
                    { q: '我该怎么准备？', a: '做什么实习合适？做几段实习？如何补充能力达到用人要求？' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col h-full group/problem">
                      <div className="bg-amber-50 p-4 mb-4 rounded-sm border-l-4 border-amber-600 shadow-sm transition-all group-hover/problem:bg-amber-100">
                        <span className="serif italic text-amber-900 text-xl font-black block">“ {item.q} ”</span>
                      </div>
                      <p className="text-slate-900/70 text-lg leading-relaxed font-medium pl-2 transition-opacity group-hover/problem:opacity-100">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-10">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="display text-4xl font-bold text-slate-200 italic">Part 1</span>
                  <h5 className="serif text-3xl font-bold text-slate-900">职业规划与就业路径选择（认知阶段）</h5>
                </div>
                <div className="editorial-border overflow-hidden bg-white shadow-sm">
                  <div className="grid grid-cols-12 bg-slate-900 text-white text-sm font-black uppercase tracking-widest py-4 px-6">
                    <div className="col-span-5">核心问题</div>
                    <div className="col-span-7 border-l border-white/10 pl-6">解决内容</div>
                  </div>
                  {[
                    { q: '专业能去哪些行业？', a: '梳理可以去的行业清单，每个行业做什么' },
                    { q: '哪些岗位适合我？', a: '岗位类型、工作内容、入职要求（学历/技能/实习）' },
                    { q: '这个行业适合我吗？', a: '内容、强度、压力，薪资 and 发展前景' },
                    { q: '需要怎么准备？', a: '大一到大三补什么技能、实习、科研' },
                    { q: '多个行业怎么选？', a: '对比不同行业的优劣，给出选择建议' }
                  ].map((row, rIdx) => (
                    <div key={rIdx} className="grid grid-cols-12 px-6 py-4 border-t border-slate-50 hover:bg-slate-50 transition-colors">
                      <div className="col-span-5 serif font-bold text-lg text-slate-800 flex items-center gap-3">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                        {row.q}
                      </div>
                      <div className="col-span-7 text-lg text-slate-900/80 border-l border-slate-100 pl-6">{row.a}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-amber-50/30 py-6 px-8 lg:py-7 lg:px-10 editorial-border relative flex-1">
                <Sparkles className="absolute top-4 right-6 text-amber-200 w-10 h-10" />
                <div className="flex items-center gap-4 mb-4">
                  <span className="display text-3xl font-bold text-slate-200 italic">Part 2</span>
                  <h5 className="serif text-3xl font-bold text-slate-900">行业导师专属定制内容</h5>
                </div>
                <p className="text-slate-500 text-sm italic mb-4">根据 student 需求 and 行业特点，灵活选择深度内容，包括但不限于：</p>
                <div className="grid md:grid-cols-3 gap-x-8 gap-y-4">
                  {[
                    '针对目标岗位修改简历', '面试准备建议', '行业核心业务逻辑讲解', 
                    '不同部门的晋升路径', '真实工作场景分享', '回答学生个性化问题'
                  ].map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-3 group">
                      <div className="shrink-0 w-2 h-2 bg-amber-600 rounded-full mt-1.5 group-hover:scale-125 transition-transform"></div>
                      <span className="text-slate-800 font-bold text-lg leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-start gap-6">
              <div className="bg-slate-900 text-white p-6 lg:p-7 shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 opacity-10 rotate-12"><Layers className="w-48 h-48" /></div>
                <h5 className="serif text-2xl font-bold mb-5 flex items-center gap-3"><Zap className="text-amber-500 w-6 h-6 fill-amber-500" /> 延伸服务</h5>
                <div className="space-y-5 relative z-10">
                   {[
                     { label: '实习规划', desc: '不同年级应该做什么类型的实习；实习时长 and 段数建议；递进式实习路径建议' },
                     { label: '实习信息与机会', desc: '提供目标行业的实习信息；匹配适合学生背景的实习机会' },
                     { label: '实习资源对接', desc: '协助学生获取实习机会；提供行业内推资源对接' }
                   ].map((ext, eIdx) => (
                     <div key={ext.label}>
                       <span className="text-lg font-black uppercase text-amber-500 tracking-[0.4em] block mb-1">{ext.label}</span>
                       <p className="text-base text-white leading-relaxed font-normal opacity-95">{ext.desc}</p>
                       {eIdx < 2 && <div className="h-px bg-white/10 mt-5"></div>}
                     </div>
                   ))}
                </div>
              </div>
              <div className="p-6 lg:p-8 border-2 border-slate-900 bg-white relative shadow-sm">
                 <div className="absolute -top-4 left-4 bg-white px-4 serif italic font-bold text-slate-900 text-lg border border-slate-900 shadow-sm">学生将收获</div>
                 <div className="flex gap-4 items-start mt-4 group">
                    <div className="shrink-0 mt-1"><FileText className="w-8 h-8 text-slate-300 group-hover:text-amber-600 transition-colors" /></div>
                    <div>
                       <p className="serif font-bold text-base lg:text-lg text-slate-900 leading-tight">《XX方向在XX行业就业发展路径报告》</p>
                       <div className="mt-4 p-4 bg-slate-50 border-l-4 border-amber-600 -ml-2">
                          <p className="text-lg text-slate-900/95 leading-relaxed font-normal italic">包含：行业清单、岗位要求、薪资水平、准备路径、实习建议</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 02 Detail */}
      <div className="bg-[#fdfcf8] editorial-border relative group mb-24">
        <div className="absolute top-0 right-0 p-8 serif text-[12rem] font-black text-slate-100/40 select-none group-hover:text-amber-100 transition-colors pointer-events-none leading-none">02</div>
        <div className="relative z-10 p-10 lg:p-16">
          <div className="flex flex-wrap items-center gap-10 mb-12">
            <div className="bg-slate-900 p-4 shadow-xl"><GraduationCap className="text-white w-8 h-8" /></div>
            <div>
              <h3 className="serif text-4xl font-bold text-slate-900 mb-2">模块 2：学术认知与专业路径规划</h3>
              <p className="text-amber-600 font-black uppercase tracking-widest text-xs">Module 02: Academic Cognition & Professional Path</p>
            </div>
            <div className="lg:ml-24 flex items-start gap-4 bg-white border border-amber-500/10 px-8 py-5 shadow-lg relative z-20">
              <School className="w-5 h-5 text-amber-600 mt-1" />
              <div className="text-left flex flex-col gap-1">
                <span className="block text-[11px] font-black uppercase text-amber-600 tracking-widest">服务提供者：</span>
                <div className="flex items-center gap-2">
                  <span className="block text-lg font-bold text-slate-900 leading-tight">该申请方向的海外名校硕士/博士</span>
                  <span className="text-slate-200 font-light">|</span>
                  <span className="text-base font-medium text-slate-500 whitespace-nowrap">一对一深度沟通</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-12">
              <div className="bg-white border border-slate-100 p-8 shadow-sm mb-12">
                <div className="flex items-center gap-4 mb-8">
                   <HelpCircle className="text-amber-600 w-5 h-5" />
                   <h4 className="serif text-2xl font-bold text-slate-900">解决什么问题？</h4>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { q: '不清楚能申什么专业？', a: '不知道本科专业可以申请哪些研究生方向？不同方向学什么、做什么？哪个更适合自己？' },
                    { q: '不知道准备什么软背景？', a: '不同方向需要什么课程、实习、科研、证书、竞赛？如何针对性地提升背景？' },
                    { q: '不知道能申什么学校？', a: '自己的背景能申到什么水平的学校？如何提升背景才能申到更好的学校？' },
                    { q: '不知道怎么规划时间 and 背景？', a: '从现在到申请时，每个年级应该分阶段做什么事情？' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col h-full group/problem">
                      <div className="bg-slate-100 p-4 mb-4 rounded-sm border-l-4 border-slate-900 shadow-sm transition-all group-hover/problem:bg-slate-900 group-hover/problem:text-white">
                        <span className="serif italic text-slate-900 group-hover/problem:text-amber-50 text-xl font-black block transition-colors">{item.q}</span>
                      </div>
                      <p className="text-slate-900/70 text-lg leading-relaxed font-medium pl-2 transition-opacity group-hover/problem:opacity-100">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-12">
              <div className="flex items-center gap-4 mb-8">
                <Layers className="text-amber-600 w-6 h-6" />
                <h5 className="serif text-3xl font-bold text-slate-900 uppercase">服务内容：六个核心维度系统梳理</h5>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  { dim: '维度1：专业认知', content: '这个方向学什么？毕业以后做什么？', harvest: '明确各方向的核心差异、学习内容、就业方向，找到最适合自己的申请方向' },
                  { dim: '维度2：学术准备', content: '怎么选课？跨专业如何选课？需要补充什么？需要考取哪些证书？', harvest: '了解申请所需的前置课程，以及考取什么证书更有利于申请' },
                  { dim: '维度3：竞赛规划', content: '要不要做竞赛？做什么竞赛？', harvest: '分析不同类型竞赛的含金量与认可度，提供竞赛选择 and 时间规划建议' },
                  { dim: '维度4：科研要求', content: '科研对申请有多大帮助？做什么科研？', harvest: '解析科研在申请中的作用，提供科研方向匹配建议' },
                  { dim: '维度5：院校项目', content: '导师有没有特别推荐的学校？就读体验如何？周围人就业怎么样？', harvest: '提供真实的院校项目信息 and 就业反馈' },
                  { dim: '维度6：申请策略', content: '背景处于什么水平？最需要补强什么？', harvest: '评估背景竞争力，明确短板，制定分阶段行动计划' },
                ].map((item, idx) => (
                  <div key={item.dim} className="bg-white border border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all group/dim">
                    <div className="flex items-center justify-between mb-3">
                      <span className="serif italic text-amber-900 text-xl font-black block">{item.dim}</span>
                      <div className="h-px flex-1 bg-amber-600/10 mx-4"></div>
                    </div>
                    <h6 className="serif font-bold text-lg lg:text-xl text-white mb-4 leading-snug inline-block bg-[#d9780d] px-3 py-1.5 shadow-sm">
                      {item.content}
                    </h6>
                    <div className="bg-slate-50/50 p-4 border-l-2 border-slate-200">
                      <p className="text-base lg:text-lg text-slate-700 font-bold italic leading-relaxed">
                        {item.harvest}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-12">
                <div className="bg-[#1a1c1e] text-white px-8 py-6 shadow-2xl relative overflow-hidden border-l-[8px] border-amber-600">
                  <div className="absolute top-0 right-0 p-4 opacity-5"><Trophy className="w-24 h-24" /></div>
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                    <div className="flex items-center gap-5 shrink-0">
                      <div className="bg-amber-600/20 p-3 border border-amber-600/30">
                        <Sparkles className="text-amber-500 w-6 h-6 fill-amber-500" />
                      </div>
                      <div>
                        <h5 className="serif text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-1">学生将收获</h5>
                        <p className="serif font-bold text-xl lg:text-2xl text-white tracking-tight">《XX方向学术准备清单》</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 md:border-l md:border-white/10 md:pl-10">
                      <p className="text-slate-300 text-base lg:text-lg font-light italic leading-relaxed">
                        包含：课程要求、证书推荐、竞赛建议、科研规划、目标院校、分年度时间规划表
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 03 Detail - Research Planning */}
      <div className="bg-[#fdfcf8] editorial-border relative group mb-24">
        <div className="absolute top-0 right-0 p-8 serif text-[12rem] font-black text-slate-100/40 select-none group-hover:text-amber-100 transition-colors pointer-events-none leading-none">03</div>
        <div className="relative z-10 p-10 lg:p-16">
          <div className="flex flex-wrap items-center gap-10 mb-12">
            <div className="bg-slate-900 p-4 shadow-xl"><Microscope className="text-white w-8 h-8" /></div>
            <div>
              <h3 className="serif text-4xl font-bold text-slate-900 mb-2">模块 3：科研规划</h3>
              <p className="text-amber-600 font-black uppercase tracking-widest text-xs">Module 03: Research Strategic Planning</p>
            </div>
            <div className="lg:ml-24 flex items-start gap-4 bg-white border border-amber-500/10 px-8 py-5 shadow-lg relative z-20">
              <FlaskConical className="w-5 h-5 text-amber-600 mt-1" />
              <div className="text-left flex flex-col gap-1">
                <span className="block text-[11px] font-black uppercase text-amber-600 tracking-widest">服务提供者：</span>
                <div className="flex items-center gap-2">
                  <span className="block text-lg font-bold text-slate-900 leading-tight">科研规划导师 (熟悉海内外科研标准)</span>
                  <span className="text-slate-200 font-light">|</span>
                  <span className="text-base font-medium text-slate-500 whitespace-nowrap">一对一学术面谈</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Problems Section */}
            <div className="lg:col-span-12">
              <div className="bg-white border border-slate-100 p-8 shadow-sm mb-12">
                <div className="flex items-center gap-4 mb-8">
                   <HelpCircle className="text-amber-600 w-5 h-5" />
                   <h4 className="serif text-2xl font-bold text-slate-900">解决什么问题？</h4>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { q: '要不要做科研？', a: '别人都在做科研，我要不要跟风？不做会不会影响申请？科研在我的申请模型中权重多少？' },
                    { q: '做什么科研有用？', a: '如何选择高匹配度的科研课题？会不会辛苦做了几个月，招生官却认为不相关？' },
                    { q: '如何找科研资源？', a: '本校实验室、校外项目、大牛推荐还是付费科研？市面上的机构靠谱吗？贵的一定好吗？' },
                    { q: '发论文重要吗？', a: '必须发论文吗？不发论文行不行？发了论文能加多少分？应该发什么级别的刊物？' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col h-full group/research-prob">
                      <div className="bg-slate-50 p-4 mb-4 border-l-4 border-slate-900 transition-all group-hover/research-prob:bg-amber-600 group-hover/research-prob:border-amber-700">
                        <span className="serif italic text-slate-900 group-hover/research-prob:text-white text-xl font-black block transition-colors">{item.q}</span>
                      </div>
                      <p className="text-slate-900/70 text-lg leading-relaxed font-medium pl-2">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Steps Section */}
            <div className="lg:col-span-12">
               <div className="flex items-center gap-4 mb-10">
                  <Beaker className="text-amber-600 w-6 h-6" />
                  <h5 className="serif text-3xl font-bold text-slate-900">服务内容：四步科研落地法</h5>
               </div>
               
               <div className="grid md:grid-cols-4 gap-4 mb-12">
                 {[
                   { step: '01', title: '判断科研重要性', content: '科研对申请的方向有多重要？有没有必要做科研？' },
                   { step: '02', title: '确定科研方向', content: '应该做什么方向的科研？如何判断科研课题与方向的匹配度？' },
                   { step: '03', title: '选择科研形式与渠道', content: '本校、校外、付费科研项目有什么区别？如何选择？' },
                   { step: '04', title: '搞清楚论文要求', content: '什么样的科研成果对申请最有帮助？论文应该发什么刊物？' }
                 ].map((s, idx) => (
                   <div key={s.step} className="bg-white border-t-[6px] border-slate-900 p-8 shadow-lg relative group/step hover:border-amber-600 transition-all">
                     <span className="display text-6xl font-black text-slate-100 absolute top-4 right-4 group-hover/step:text-amber-50 transition-colors -z-0">{s.step}</span>
                     <div className="relative z-10">
                        <h6 className="serif font-bold text-xl text-slate-900 mb-4">{s.title}</h6>
                        <p className="text-slate-600 text-base leading-relaxed font-normal">{s.content}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Harvest Section */}
            <div className="lg:col-span-12">
                <div className="bg-[#1a1c1e] text-white px-10 py-8 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="absolute top-0 right-0 p-6 opacity-5 rotate-12"><FileSearch className="w-40 h-40" /></div>
                    <div className="relative z-10 flex items-center gap-8">
                       <div className="w-16 h-16 bg-amber-600 flex items-center justify-center rotate-45 shadow-xl">
                          <BookMarked className="text-white w-8 h-8 -rotate-45" />
                       </div>
                       <div>
                          <p className="text-amber-500 text-[11px] font-black uppercase tracking-[0.4em] mb-2">Student Outcome</p>
                          <h5 className="serif text-3xl lg:text-4xl font-bold tracking-tight">《个人科研规划路线图》</h5>
                       </div>
                    </div>
                    <div className="flex-1 md:border-l md:border-white/10 md:pl-10">
                      <p className="text-slate-300 text-base lg:text-lg font-light italic leading-relaxed">
                        包含：科研重要性评估、科研方向建议、科研渠道选择、论文发表要求
                      </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 04 Detail - Standardized Testing Planning */}
      <div className="bg-[#fdfcf8] editorial-border relative group mb-0">
        <div className="absolute top-0 right-0 p-8 serif text-[12rem] font-black text-slate-100/40 select-none group-hover:text-amber-100 transition-colors pointer-events-none leading-none">04</div>
        <div className="relative z-10 p-10 lg:p-16">
          <div className="flex flex-wrap items-center gap-10 mb-12">
            <div className="bg-slate-900 p-4 shadow-xl"><PenTool className="text-white w-8 h-8" /></div>
            <div>
              <h3 className="serif text-4xl font-bold text-slate-900 mb-2">模块 4：标化考试规划与备考支持</h3>
              <p className="text-[#9b1c1c] font-black uppercase tracking-widest text-xs">Module 04: Standardized Testing & Support</p>
            </div>
            <div className="lg:ml-24 flex items-start gap-4 bg-white border border-red-500/10 px-8 py-5 shadow-lg relative z-20">
              <SearchCheck className="w-5 h-5 text-[#9b1c1c] mt-1" />
              <div className="text-left flex flex-col gap-1">
                <span className="block text-[11px] font-black uppercase text-[#9b1c1c] tracking-widest">服务提供者：</span>
                <div className="flex items-center gap-2">
                  <span className="block text-lg font-bold text-slate-900 leading-tight">语培规划师 (熟悉托福/雅思考试要求)</span>
                  <span className="text-slate-200 font-light">|</span>
                  <span className="text-base font-medium text-slate-500 whitespace-nowrap">全方位备考闭环</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Problems Section */}
            <div className="lg:col-span-12">
              <div className="bg-white border border-slate-100 p-8 shadow-sm mb-12">
                <div className="flex items-center gap-4 mb-8">
                   <HelpCircle className="text-[#9b1c1c] w-5 h-5" />
                   <h4 className="serif text-2xl font-bold text-slate-900">解决什么问题？</h4>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {[
                    { q: '要考什么？', a: '托福还是雅思？怎么选更合适？' },
                    { q: '什么时候考？目标多少分', a: '什么时候首考？刷分？目标分数是多少？' },
                    { q: '自己能考多少分？', a: '不知道目前的英语真实水平' },
                    { q: '怎么备考有效？', a: '用什么资料？各科目怎么提高？' },
                    { q: '缺乏外部监督', a: '缺乏备考动力，需要监督 and 推动' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col h-full group/test-prob">
                      <div className="bg-red-50 p-4 mb-4 border-l-4 border-[#9b1c1c] transition-all group-hover/test-prob:bg-[#9b1c1c]">
                        <span className="serif italic text-[#9b1c1c] group-hover/test-prob:text-white text-lg font-black block transition-colors">{item.q}</span>
                      </div>
                      <p className="text-slate-900/70 text-base leading-relaxed font-medium pl-2">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Steps Section - Horizontal Roadmap */}
            <div className="lg:col-span-12">
               <div className="flex items-center gap-4 mb-10">
                  <CalendarDays className="text-[#9b1c1c] w-6 h-6" />
                  <h5 className="serif text-3xl font-bold text-slate-900 uppercase">服务内容：标化备考四步法</h5>
               </div>
               
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                 {[
                   { 
                     title: '第一步：考试规划', 
                     icon: <Target className="w-7 h-7" />,
                     content: '确定考试类型；设定目标分数；评估当前水平：提供模拟考试；制定出分时间表。' 
                   },
                   { 
                     title: '第二步：备考计划制定', 
                     icon: <PenTool className="w-7 h-7" />,
                     content: '制定个性化学习计划；明确分阶段学习重点' 
                   },
                   { 
                     title: '第三步：备考支持', 
                     icon: <Headphones className="w-7 h-7" />,
                     content: '电子版复习资料；定期模考；学习方法答疑；进度监督' 
                   },
                   { 
                     title: '第四步：机构对接', 
                     icon: <Users className="w-7 h-7" />,
                     content: '如需报班，可匹配合适的语培机构；提供机构推荐 and 建议' 
                   }
                 ].map((s, idx) => (
                   <div key={s.title} className="bg-white p-8 border border-slate-100 shadow-xl relative group/test-step hover:-translate-y-2 transition-all duration-500">
                     <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-6 group-hover/test-step:bg-[#9b1c1c] transition-colors">
                        {s.icon}
                     </div>
                     <h6 className="serif font-bold text-xl text-slate-900 mb-4">{s.title}</h6>
                     <p className="text-slate-500 text-[15px] leading-relaxed font-normal">{s.content}</p>
                     <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#9b1c1c] transition-all duration-700 group-hover/test-step:w-full"></div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Premium Harvest Section */}
            <div className="lg:col-span-12">
                <div className="bg-[#1a1c1e] text-white px-10 py-10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 border-t-8 border-[#9b1c1c]">
                    <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12"><ShieldCheck className="w-64 h-64" /></div>
                    <div className="relative z-10 flex items-center gap-8 max-w-md">
                       <div className="shrink-0 w-20 h-20 bg-[#9b1c1c] flex items-center justify-center rounded-full shadow-2xl animate-pulse">
                          <Award className="text-white w-10 h-10" />
                       </div>
                       <div>
                          <p className="text-red-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Exclusive Outcome</p>
                          <h5 className="serif text-3xl lg:text-3xl font-bold tracking-tight">《标化考试时间规划表》</h5>
                       </div>
                    </div>
                    
                    <div className="flex-1 md:border-l md:border-white/10 md:pl-10">
                      <p className="text-slate-100 text-base lg:text-lg font-light italic leading-relaxed">
                        包含：电子版备考资料包、备考计划定制、学习方法答疑支持、进度监督
                      </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DefinitionSection = () => (
  <section id="definition" className="py-12 lg:py-16 bg-[#fdfcf8] border-y border-slate-100 overflow-hidden relative">
    <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
      <div className="mb-10 relative text-center mx-auto max-w-4xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 display italic text-[11rem] text-slate-100 font-black -z-10 select-none opacity-40 -translate-y-16">VISION</div>
        <div className="flex flex-col items-center gap-0 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-12 bg-amber-600"></div>
            <span className="text-amber-700 font-black uppercase tracking-[0.6em] text-[10px]">Core Philosophy</span>
            <div className="h-px w-12 bg-amber-600"></div>
          </div>
          <h2 className="serif text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter leading-tight mb-2">什么是“多元申请规划”？</h2>
          <div className="relative inline-flex mt-1">
            <span className="display text-3xl lg:text-5xl font-bold text-white bg-amber-600 px-6 py-2 border-amber-600 uppercase tracking-widest italic">不止于申请</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="bg-white border-2 border-slate-50 p-6 lg:p-7 relative overflow-hidden group flex flex-col h-full shadow-xl rounded-sm">
            <div className="absolute top-0 right-0 p-3 serif text-8xl font-black text-slate-100/20 select-none pointer-events-none">01</div>
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="serif text-xl lg:text-2xl font-black text-slate-900 mb-5 flex items-baseline gap-4">
                <span className="text-amber-600 text-sm lg:text-lg font-black italic shrink-0">多元之一</span>
                <span className="tracking-tight">{PHILOSOPHY_PILLARS[0].title.split('：')[1]}</span>
              </h3>
              <p className="text-slate-600 font-medium text-base lg:text-[18px] mb-6 serif italic border-l-4 border-amber-600 pl-5 leading-relaxed">
                不只关注学术成绩，而是<span className="font-black text-amber-700 underline decoration-amber-200 underline-offset-4">四线并行、系统规划</span>：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 content-start">
                {PHILOSOPHY_PILLARS[0].items?.map((item, iIdx) => (
                  <div key={item.name} className="bg-white p-4 border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all group/item flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="shrink-0 w-9 h-9 bg-slate-900 flex items-center justify-center shadow-md">
                        {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'text-white w-3.5 h-3.5' })}
                      </div>
                      <h4 className="serif font-bold text-[18px] text-slate-900 leading-tight">{item.name}</h4>
                    </div>
                    <p className="text-slate-500 text-[16px] leading-snug font-normal opacity-90 tracking-tight flex-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-slate-50 p-6 lg:p-7 relative overflow-hidden group flex flex-col h-full shadow-xl rounded-sm">
            <div className="absolute top-0 right-0 p-3 serif text-8xl font-black text-slate-100/20 select-none pointer-events-none">02</div>
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="serif text-xl lg:text-2xl font-black text-slate-900 mb-5 flex items-baseline gap-4">
                <span className="text-amber-600 text-sm lg:text-lg font-black italic shrink-0">多元之二</span>
                <span className="tracking-tight">{PHILOSOPHY_PILLARS[1].title.split('：')[1]}</span>
              </h3>
              <p className="text-slate-600 font-medium text-base lg:text-[18px] mb-6 serif italic border-l-4 border-amber-600 pl-5 leading-relaxed">
                不是一开始就锁死方向，而是<span className="font-black text-amber-700 underline decoration-amber-200 underline-offset-4">先探索、再聚焦</span>：
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 flex-1">
                {PHILOSOPHY_PILLARS[1].steps?.map((step, sIdx) => (
                  <div key={step.label} className="bg-[#1a1c1e] text-white p-3 pt-6 group/phase hover:bg-amber-600 transition-colors duration-500 relative flex flex-col h-full shadow-lg">
                    <div className="text-[8px] font-black tracking-widest text-amber-500 mb-3 group-hover/phase:text-white uppercase">P{sIdx + 1}</div>
                    <h4 className="serif font-bold text-base lg:text-[18px] mb-3 leading-tight">{step.label}</h4>
                    <div className="h-0.5 w-5 bg-amber-600 group-hover/phase:bg-white transition-colors mb-3"></div>
                    <p className="text-sm lg:text-[15px] leading-relaxed font-normal opacity-70 group-hover/phase:opacity-100 flex-1">{step.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-4">
          <div className="lg:col-span-6 relative group overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-105" 
              alt="Planning Session" 
            />
            <div className="absolute inset-0 border-[15px] border-white/10 pointer-events-none"></div>
          </div>
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-8 bg-white border border-slate-100 shadow-xl relative overflow-hidden flex-1 group/values">
              <Sparkles className="absolute top-6 right-6 text-slate-100/50 w-24 h-24 pointer-events-none group-hover/values:text-amber-50 transition-colors" />
              <div className="flex items-center gap-4 mb-8">
                <Zap className="text-amber-500 w-8 h-8 fill-amber-500" />
                <h4 className="serif text-4xl font-black text-slate-900 tracking-tight">我们能帮学生实现</h4>
              </div>
              <div className="space-y-6 relative z-10">
                {PHILOSOPHY_VALUES.map((val, vIdx) => (
                  <div key={val.title} className="flex gap-5 items-start group/val">
                    <div className="shrink-0 w-7 h-7 rounded-full border border-emerald-500/40 flex items-center justify-center bg-transparent group-hover/val:bg-emerald-500 transition-all">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 group-hover/val:text-white" />
                    </div>
                    <div>
                      <h5 className="serif font-bold text-xl mb-1 leading-tight text-amber-700 underline decoration-amber-200 underline-offset-4 transition-colors">
                        {val.title}
                      </h5>
                      <p className="text-slate-600 text-base leading-snug font-medium opacity-90 tracking-tight">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-slate-900 text-white shadow-2xl relative overflow-hidden border-l-[10px] border-amber-600">
               <div className="absolute bottom-0 right-0 opacity-10 translate-x-1/4 translate-y-1/4"><Zap className="w-64 h-64 fill-white" /></div>
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-amber-500"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">OBJECTIVE</span>
                  </div>
                  <p className="serif text-2xl lg:text-3xl font-light italic leading-tight tracking-tight">
                    让努力付出的学生<span className="text-white font-bold not-italic underline decoration-amber-600 decoration-2 underline-offset-4">申请到梦校</span><br/>
                    并获得<span className="text-amber-500 font-black not-italic border-b-4 border-amber-600/30 pb-1 tracking-tighter">高薪就业与长远职业发展</span>
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="process" className="pt-16 pb-32 bg-[#161719] text-white relative overflow-hidden">
      <div className="absolute top-30px left-0 -translate-y-1/2 serif font-black text-[30rem] text-white/[0.02] select-none pointer-events-none">PLAN</div>
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
          <div className="lg:col-span-6">
            <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Execution Framework</span>
            <h2 className="serif text-6xl font-bold mb-8">精细化<br /><span className="italic font-light text-slate-200">服务流程</span></h2>
          </div>
          <div className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
             {PHASES.map((p, idx) => (
               <button 
                 key={p.title} 
                 onClick={() => setActivePhase(idx)}
                 className={`px-8 py-8 border transition-all duration-700 flex flex-col justify-between items-start text-left min-w-[140px] ${activePhase === idx ? 'bg-amber-600 border-amber-600 shadow-2xl scale-105' : 'border-slate-800 hover:border-slate-600 bg-transparent'}`}
               >
                 <span className="serif text-[28px] italic mb-2 opacity-60">0{idx + 1}</span>
                 <span className="serif text-[22px] font-bold uppercase tracking-tighter">{p.title}</span>
               </button>
             ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="mb-12">
              <h3 className="serif text-4xl font-bold mb-6 text-white">{PHASES[activePhase].title} · <span className="text-amber-600">{PHASES[activePhase].target}</span></h3>
              <div className="h-px w-full bg-slate-800 mb-10"></div>
              <div className="grid md:grid-cols-2 gap-10">
                {PHASES[activePhase].services.map((service, sIdx) => (
                  <div key={service.name} className="group">
                    <h5 className="serif font-bold text-[19px] mb-4 flex items-center gap-3"><span className="w-6 h-px bg-amber-600 block"></span>{service.name}</h5>
                    {service.description && <p className="text-[17px] leading-relaxed mb-4 font-light">{service.description}</p>}
                    {service.items && (
                      <ul className="space-y-3">
                        {service.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-3 text-[17px] italic"><Star className="w-3 h-3 text-amber-900 mt-0.5" />{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
             <div className="bg-[#1e1f21] p-12 shadow-premium relative">
               <div className="absolute top-0 right-0 p-6 serif text-[6rem] font-bold text-white/5 leading-none select-none">RESULT</div>
               <h4 className="serif text-2xl font-bold text-white mb-10 flex items-center gap-4"><ListChecks className="text-amber-600 w-7 h-7" /> 核心成果</h4>
               <ul className="space-y-6 relative z-10">
                 {PHASES[activePhase].outcomes.map((outcome, oIdx) => (
                   <li key={outcome} className="flex gap-4 group items-center">
                     <span className="serif text-[13px] font-black text-amber-600 group-hover:translate-x-1 transition-transform">0{oIdx + 1}</span>
                     <span className="text-slate-200 text-white font-light text-[18px] tracking-tight leading-snug">{outcome}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isPanelHovered, setIsPanelHovered] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-amber-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        <section id="dilemmas" className="h-[calc(100vh-30px)] lg:h-[calc(100vh-30px)] flex items-center bg-[#f8f7f2] relative py-6 overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.03]"></div>
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full h-[85vh] relative z-10 flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch h-full">
              <div 
                onMouseEnter={() => setIsPanelHovered(true)}
                onMouseLeave={() => setIsPanelHovered(false)}
                className="lg:col-span-4 flex flex-col justify-between p-8 lg:p-10 bg-[#1a1c1e] text-white relative shadow-2xl overflow-hidden group border border-white/5 h-full transition-colors duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-600"></div>
                <div className="absolute left-4 top-20 bottom-20 flex flex-col justify-between items-center opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none">
                  <span className="text-[9px] font-black vertical-text tracking-[0.2em] text-amber-500 uppercase">Analysis</span>
                  <div className="w-[1px] flex-1 bg-white/10 my-6 relative">
                    {[10, 25, 40, 50, 60, 75, 90].map(p => (
                        <div key={p} className={`absolute w-2 h-[1px] -left-[0.5px] ${p === 50 ? 'bg-amber-600 w-5 -left-2 shadow-[0_0_8px_rgba(217,119,6,0.5)]' : 'bg-white/30'}`} style={{ top: `${p}%` }}></div>
                    ))}
                  </div>
                  <span className="text-[9px] font-black vertical-text tracking-[0.2em] text-amber-500 uppercase">Perspective</span>
                </div>
                <div className="relative z-10 pl-6 h-full flex flex-col">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px]">Strategic Audit</span>
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                  </div>
                  <div className="relative mb-8">
                    <span className="absolute -top-10 -left-6 display italic text-[8rem] font-bold text-white/[0.04] select-none pointer-events-none leading-none tracking-tighter">Issue</span>
                    <h2 className="serif text-5xl lg:text-6xl font-bold leading-tight tracking-tighter relative z-10 drop-shadow-sm">学生面临的<br /><span className="text-slate-400 italic font-light font-bold">深层</span>困境</h2>
                  </div>
                  <div className={`p-6 lg:p-7 bg-black border border-white/10 relative shadow-2xl mb-auto transition-all duration-500 ${isPanelHovered ? 'bg-slate-900 border-amber-600/30' : ''}`}>
                     <div className="absolute -top-3 left-4 bg-[#1a1c1e] px-2 flex items-center gap-2">
                        <Info className="w-3 h-3 text-amber-600" />
                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Diagnosis Report</span>
                     </div>
                     <p className="text-slate-400 font-light text-[14px] leading-relaxed serif italic">
                        这些困境的根源在于：<br /><span className={`transition-colors duration-500 font-medium not-italic mt-3 block border-l-4 border-amber-600 pl-4 py-1 ${isPanelHovered ? 'text-white' : 'text-slate-300'}`}>缺乏完整认知、缺少系统规划、缺失就业导向</span>
                     </p>
                  </div>
                  <div className={`mt-8 group/cta cursor-pointer transition-all duration-700 ${isPanelHovered ? 'scale-[1.03] shadow-[0_0_40px_rgba(217,119,6,0.35)]' : ''}`}>
                    <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-700 p-[1px] shadow-2xl">
                        <div className={`bg-[#1a1c1e] px-6 py-5 flex items-center gap-4 transition-all duration-500 group-hover/cta:bg-amber-600/5 ${isPanelHovered ? 'bg-amber-600/10' : ''}`}>
                            <div className={`shrink-0 w-10 h-10 rounded-none border border-amber-600/40 flex items-center justify-center bg-amber-600 transition-all duration-500 group-hover/cta:bg-white group-hover/cta:border-white group-hover/cta:rotate-90 ${isPanelHovered ? 'bg-white border-white rotate-0 translate-y-1' : ''}`}>
                                <MoveDown className={`w-5 h-5 transition-colors group-hover/cta:text-amber-600 ${isPanelHovered ? 'text-amber-600' : 'text-white'}`} />
                            </div>
                            <p className={`font-black text-[13px] leading-tight transition-colors drop-shadow-sm group-hover/cta:text-white ${isPanelHovered ? 'text-white translate-x-1' : 'text-amber-500'}`}>多元申请规划，从根本上解决这些困境问题</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 grid grid-rows-2 gap-5 lg:gap-6 h-full">
                <DilemmaCard dilemma={DILEMMAS[0]} index={0} />
                <DilemmaCard dilemma={DILEMMAS[1]} index={1} />
              </div>
              <div className="lg:col-span-5 grid grid-rows-3 gap-5 lg:gap-6 h-full">
                <DilemmaCard dilemma={DILEMMAS[2]} index={2} />
                <DilemmaCard dilemma={DILEMMAS[3]} index={3} />
                <DilemmaCard dilemma={DILEMMAS[4]} index={4} className="bg-slate-50/50 border-slate-200/50" />
              </div>
            </div>
          </div>
        </section>

        <DefinitionSection />
        <ModuleSection />
        <ProcessSection />
      </main>

      <footer className="py-24 bg-[#1a1c1e] text-white border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-16 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-12 h-12 bg-amber-600 flex items-center justify-center rotate-45 shadow-2xl"><Zap className="text-white w-5 h-5 -rotate-45" /></div>
              <div><span className="serif font-bold text-2xl tracking-tighter uppercase">留学多元规划</span><p className="text-[9px] text-amber-500 font-black uppercase tracking-[0.4em] mt-1">Multi-Admission Planning Service</p></div>
            </div>
            <p className="text-white text-[18px] max-w-sm font-light leading-relaxed">提供全球名校的学术规划与职业发展咨询，助力学子实现更好的就业<br/> 超哥留学 北京学翼 榕树国际SeeyooEdu</p>
          </div>
          <div className="flex md:justify-end gap-16 text-[16px] font-black uppercase tracking-[0.3em] text-slate-500">
            <div className="space-y-3 flex flex-col">
              <span className="text-white mb-2">更多链接</span>
              <button onClick={() => scrollToSection('modules')} className="hover:text-amber-600 text-left">多元申请规划的四大模块</button>
              <button onClick={() => scrollToSection('process')} className="hover:text-amber-600 text-left">多元申请规划的服务流程</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
