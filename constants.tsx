
import React from 'react';
import { 
  AlertCircle, 
  Map, 
  Target, 
  Compass, 
  Activity, 
  TrendingUp,
  Briefcase,
  GraduationCap,
  Microscope,
  Award,
  Search,
  Clock,
  LayoutGrid,
  Zap,
  BookOpen,
  CheckCircle2,
  FileSearch,
  Trophy,
  PenTool,
  ClipboardCheck,
  CalendarDays
} from 'lucide-react';
import { Dilemma, ServiceModule, Phase } from './types';

export const DILEMMAS: Dilemma[] = [
  {
    id: '1',
    title: '就业市场认知缺失',
    description: '大学没有"就业"这门课，学生不知道毕业后能做什么工作、岗位具体干什么、薪资多少、用人要求是什么。读研是为了好就业，但对就业市场一无所知。',
    icon: <Briefcase className="w-6 h-6 text-blue-600" />
  },
  {
    id: '2',
    title: '专业认知不完整',
    description: '以为自己知道要申什么专业，实际上对专业的细分方向、学习内容、申请要求一知半解。金融、计算机、管理等专业都有10+个细分方向，每个方向的要求和就业完全不同。',
    icon: <Search className="w-6 h-6 text-emerald-600" />
  },
  {
    id: '3',
    title: '盲目积累背景',
    description: '不知道该准备什么，看到别人做科研就做科研，看到别人实习就实习。大三发现做的背景和申请方向不匹配，时间和精力都浪费了。',
    icon: <Target className="w-6 h-6 text-orange-600" />
  },
  {
    id: '4',
    title: '方向选择太晚',
    description: '大一大二迷茫摸索，大三才确定方向，但已经错过了最佳准备期。来不及补课程、考证书、做高质量实习，只能降档申请。',
    icon: <Clock className="w-6 h-6 text-purple-600" />
  },
  {
    id: '5',
    title: '缺乏系统规划',
    description: '不知道每个年级该做什么，东一榔头西一棒子。标化、实习、科研、课程都在做，但没有轻重缓急，最后哪个都不够深入。',
    icon: <LayoutGrid className="w-6 h-6 text-rose-600" />
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    id: 'pillar-1',
    title: '多元之一：多条规划线并行推进',
    description: '不只关注学术成绩，而是四线并行、系统规划：',
    items: [
      { name: '实习就业规划', detail: '从了解目标行业 和 岗位，到制定实习计划并执行', icon: <Briefcase className="w-4 h-4" /> },
      { name: '专业选择与学术准备', detail: '从本科专业能申哪些研究生方向，到每个方向需要什么课程、证书、竞赛', icon: <BookOpen className="w-4 h-4" /> },
      { name: '科研规划', detail: '从评估科研重要性，到选择科研方向并完成项目', icon: <Microscope className="w-4 h-4" /> },
      { name: '标化备考', detail: '从确定考试类型和目标分数，到制定备考计划并出分', icon: <Award className="w-4 h-4" /> }
    ]
  },
  {
    id: 'pillar-2',
    title: '多元之二：多个方向探索验证',
    description: '不是一开始就锁死方向，而是先探索、再聚焦，通过四个阶段逐步明确：',
    steps: [
      { label: '认知期', content: '了解专业的所有分支方向（如金融可拆解成10+个细分方向），建立完整认知' },
      { label: '探索期', content: '通过实践验证3-4个感兴趣的方向，找到真正适合的' },
      { label: '聚焦期', content: '最终确定1-2个主申方向，制定精准规划' },
      { label: '深耕期', content: '针对确定好的方向进行深度投入，并完成高质量背景提升' }
    ]
  }
];

export const PHILOSOPHY_VALUES = [
  { title: '从迷茫到清晰', desc: '通过认知和探索，明确申请方向和职业目标' },
  { title: '从盲目到精准', desc: '针对确定方向，精准补齐背景短板，避免无效积累' },
  { title: '从就业盲区到就业优势', desc: '补上"就业认知"这门缺失的课，实现好就业、高薪资就业' },
  { title: '从被动到主动', desc: '四年系统规划，每个阶段清楚该做什么，掌握申请主动权' },
  { title: '提高录取竞争力', desc: '有深度、有规划的申请背景，在竞争中脱颖而出' }
];

export const MODULES: ServiceModule[] = [
  {
    id: 'module-1',
    title: '就业认知与实习规划',
    subtitle: '解决“好不好就业、怎么准备”的问题',
    provider: '该行业资深从业者 (5-10年经验)',
    content: [
      { question: '这个专业好就业吗？', expression: '毕业后能去哪些企业、哪些岗位？行业待遇怎么样？' },
      { question: '工作压力大吗？适合我吗？', expression: '工作强度如何？适合什么样的人？' },
      { question: '用人要求高吗？', expression: '目标企业的用人要求是什么？对学校排名有限制吗？' },
      { question: '我该怎么准备？', expression: '做什么实习合适？做几段？如何补齐能力？' }
    ],
    outputs: ['《XX方向在XX行业就业发展路径报告》', '行业清单与薪资水平', '精准实习路径建议']
  },
  {
    id: 'module-2',
    title: '学术认知与专业路径',
    subtitle: '解决“能申什么、补什么”的问题',
    provider: '海外名校硕士/博士毕业生',
    content: [
      { question: '不清楚能申哪个专业', expression: '本科专业可以申请哪些研究生方向？哪个更适合？' },
      { question: '不知道准备什么软背景', expression: '需要什么课程、实习、科研、证书、竞赛？' },
      { question: '不知道能申哪个学校', expression: '目前背景能申到什么水平？如何提升？' },
      { question: '不知道怎么规划时间', expression: '从现在到申请，每个年级应该做什么？' }
    ],
    outputs: ['《XX方向学术准备清单》', '前置课程要求', '分年度时间规划表']
  }
];

export const PHASES: Phase[] = [
  {
    title: '认知期',
    target: '建立完整认知，了解可能性',
    services: [
      { 
        name: '就业认知 (模块1 Part1)', 
        description: '通过行业导师深度沟通，了解每个方向对应的行业、岗位、工作内容、薪资、用人要求' 
      },
      { 
        name: '学术认知', 
        description: '通过学术mentor深度沟通，了解专业可申的所有分支方向、每个方向的学术要求' 
      }
    ],
    outcomes: [
      '《专业分支方向全景图》',
      '《各方向学术准备清单》',
      '《各方向就业全景图》',
      '初步筛选出3-4个感兴趣方向'
    ]
  },
  {
    title: '探索期',
    target: '通过实践验证认知，找到"真正喜欢和擅长"的方向',
    servicesDescription: '针对认知期筛选出的3-4个方向，分别尝试相关的探索活动：',
    services: [
      { name: '校内探索', description: '社团活动、学生组织、校内项目' },
      { name: '学术探索', description: '竞赛参与、科研项目、助教/助研' },
      { name: '社会探索', description: '义工、志愿者活动' },
      { name: '国际探索', description: '海外交流、交换项目、暑期学校' },
      { name: '职业探索', description: '实习、Workshop、短期项目、行业体验' }
    ],
    outcomes: [
      '《探索活动执行计划》',
      '确定1-2个主申方向 (关键输出里程碑)'
    ]
  },
  {
    title: '聚焦期',
    target: '针对确定的1-2个主申方向，制定精准的背景提升规划',
    servicesDescription: '针对每个确定的主申方向进行深度规划：',
    services: [
      { 
        name: '先修课程补充', 
        items: ['按照学术mentor给的清单补齐必修课、选修课', '考取证书 (如CFA、FRM、CPA等)', '参加竞赛；在线课程补充'] 
      },
      { 
        name: '实习路径规划 (模块1 Part2)', 
        items: ['制定递进式实习计划', '简历修改指导', '面试准备建议', '实习资源对接 和 内推'] 
      },
      { 
        name: '科研规划', 
        items: ['评估科研重要性', '确定科研课题方向', '选择科研渠道 (本校导师/校外项目/付费项目)', '论文发表目标和时间安排'] 
      },
      { 
        name: '标化规划', 
        items: ['确定考试类型 (托福/雅思) 和目标分数', '制定出分时间表', '提供备考资料和模考服务', '学习方法指导和进度监督'] 
      }
    ],
    outcomes: [
      '《先修课程补充计划》',
      '《实习路径规划表》',
      '《科研规划路线图》',
      '《标化考试时间规划表》'
    ]
  },
  {
    title: '深耕期',
    target: '按照规划执行，完成高质量背景提升',
    servicesDescription: '全程监督执行进度、实习资源对接 和 内推、科研项目跟进、标化备考监督：',
    services: [
      { name: '深度实习', description: '完成1-2段高质量、长周期实习 (3-6个月)，最好有大厂 or 行业知名公司背景，实习内容与申请方向高度匹配' },
      { name: '科研深耕', description: '完成1-2个科研项目，争取论文发表 (根据方向要求)，获得科研导师推荐信' },
      { name: '学术完善', description: '完成必要的前置课程，考出目标证书，保持GPA' },
      { name: '语言出分', description: '完成托福/雅思目标分数' },
      { name: '软性提升', description: '完成竞赛并获奖，担任 student 组织 leader，参与有意义的实践活动' }
    ],
    outcomes: [
      '1-2段高质量实习经历',
      '科研项目经历和成果 (论文/报告)',
      '标化语言成绩达标',
      '形成有竞争力的申请背景',
      '为文书写作积累充足素材'
    ]
  }
];
