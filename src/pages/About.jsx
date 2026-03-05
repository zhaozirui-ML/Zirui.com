import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-20">
      <div className="max-w-2xl">
        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-text-primary mb-4 text-balance">
          About Zirui
        </h1>
        <p className="font-sans text-text-muted text-sm md:text-base mb-12 text-pretty">
          数字产品设计师｜复杂系统 · Vibe Coding · 设计系统与交付效率
        </p>

        {/* Bio */}
        <div className="space-y-6 text-text-primary leading-relaxed text-sm md:text-base text-pretty">
          <p>
            你好👋，我是赵子瑞 🧑🏻‍💻。
          </p>
          <p>
            曾就职于{' '}
            <a href="https://www.smartx.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-indigo-700 transition-colors">
              SmartX
            </a>
            ，负责企业级虚拟化产品 SMTX ELF 与分布式集群管理平台CloudTower 的设计工作，长期面对高复杂度的资源配置、权限关系与系统协作问题。
          </p>
          <p>
            最近在
            <a href="https://www.axzsource.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-indigo-700 transition-colors">
              一智科技
            </a>
            担任 Senior UX Designer，主导施工业务线图纸模块（Web 与 App）全链路设计，从 0 到 1 搭建图纸上传解析到任务协同闭环，并推动组件库与设计规则治理，降低沟通与返工成本，确保设计方案的可实现性。
          </p>
          <p>
            工作之余，我喜欢讨论文史哲相关的话题，并热衷于户外徒步，期待与更多有趣的人一起交流。此外我还是一名云彩收集爱好者，经常在闲暇时收集办公室外的
            <Link to="/photography" className="text-accent underline underline-offset-2 hover:text-indigo-700 transition-colors">
              各类美丽云彩
            </Link>
            。
          </p>
          <p>
            👉 欢迎查看我的作品或与我联系。
          </p>
        </div>

        <div className="mt-14 mb-12">
          <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">
            Social
          </p>
          <div className="flex items-center gap-8">
          {/* X (Twitter) */}
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-muted transition-colors" aria-label="X">
            <svg className="size-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-muted transition-colors" aria-label="Instagram">
            <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* Notion */}
          <a href="https://notion.so/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-muted transition-colors" aria-label="Notion">
            <svg className="size-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.29 2.168c-.42-.327-.98-.7-2.054-.607L3.12 2.768c-.467.047-.56.28-.374.466zM5.252 7.617v14.222c0 .746.373 1.026 1.213.98l14.568-.84c.84-.047.933-.56.933-1.166V6.824c0-.607-.233-.933-.746-.887l-15.222.887c-.56.047-.746.327-.746.793zM18.6 8.29c.094.42 0 .84-.42.887l-.7.14v10.513c-.607.327-1.167.514-1.634.514-.746 0-.933-.234-1.493-.934l-4.573-7.186v6.953l1.446.327s0 .84-1.166.84l-3.22.186c-.093-.186 0-.653.327-.746l.84-.233V10.05L6.58 9.91c-.093-.42.14-1.026.793-1.073l3.453-.233 4.76 7.28v-6.44l-1.213-.14c-.094-.514.28-.887.746-.933zM2.633 1.395l13.728-1.02c1.68-.14 2.1.094 2.8.607l3.867 2.706c.467.374.607.7.607 1.166v16.929c0 1.073-.374 1.68-1.726 1.773L6.486 24.3c-1.026.047-1.54-.094-2.1-.793L1.14 19.567c-.607-.793-.84-1.4-.84-2.1V2.98c0-.84.373-1.54 1.353-1.586z" />
            </svg>
          </a>
          {/* Spotify */}
          <a href="https://spotify.com/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-muted transition-colors" aria-label="Spotify">
            <svg className="size-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-mono text-xs text-text-muted tracking-wider uppercase mb-4">
            Phone & Mail
          </p>
          <a href="tel:+8613260951210" className="block font-mono text-base font-medium text-text-primary hover:text-accent transition-colors ease-out mb-2">
            13260951210
          </a>
          <a href="mailto:Zhaozirui721@gmail.com" className="block font-mono text-base font-medium text-text-primary hover:text-accent transition-colors ease-out">
            Zhaozirui721@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
