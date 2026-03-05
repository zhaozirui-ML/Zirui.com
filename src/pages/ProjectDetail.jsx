import React from 'react'
import { useParams, Link } from 'react-router-dom'

const projectData = {
  'smtx-elf': {
    company: 'SmartX Corp.',
    title: 'SMTX ELF Virtualization',
    description: '企业级虚拟化产品的设计探索，专注于复杂资源配置与系统协作的用户体验优化。',
  },
  'vm-optimization': {
    company: 'SmartX Corp.',
    title: 'VM Features Optimization',
    description: '虚拟机功能优化项目，通过深度用户研究改善虚拟化管理的核心工作流。',
  },
  'design-system': {
    company: 'SmartX Corp.',
    title: 'CloudTower Design System',
    description: '为 CloudTower 分布式集群管理平台打造的设计系统，统一组件规范与交互模式。',
  },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectData[slug]

  if (!project) {
    return (
      <div className="max-w-content mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-text-primary mb-4 text-balance">
          404
        </h1>
        <p className="text-text-muted mb-8">页面不存在</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-indigo-700 transition-colors"
        >
          ← 返回首页
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-content mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-20">
      {/* Back */}
      <Link
        to="/#work"
        className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-text-primary transition-colors mb-10"
      >
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Work
      </Link>

      {/* Header */}
      <p className="font-mono text-xs tracking-widest uppercase text-text-muted mb-3">
        {project.company}
      </p>
      <h1 className="font-serif text-3xl md:text-5xl font-bold text-text-primary mb-6 text-balance">
        {project.title}
      </h1>

      {/* Coming Soon Card */}
      <div className="rounded-3xl bg-white/60 border border-gray-200/60 px-8 md:px-12 py-16 md:py-24 text-center mt-8">
        <div className="size-16 mx-auto mb-6 rounded-2xl bg-gray-100 flex items-center justify-center">
          <svg className="size-8 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
          </svg>
        </div>
        <h2 className="font-serif text-2xl font-semibold text-text-primary mb-3 text-balance">
          Case Study Coming Soon
        </h2>
        <p className="text-text-muted max-w-md mx-auto text-pretty">
          {project.description}
        </p>
        <p className="font-mono text-xs text-text-caption mt-6">
          详细案例正在整理中，敬请期待。
        </p>
      </div>
    </div>
  )
}
