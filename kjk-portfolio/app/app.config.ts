export default defineAppConfig({
  profile: {
    name: 'Kim JunGyeom',
    job: 'system engineer',
    email: 'wnsruadl90@naver.com',
    phone: '(+81) 070 3781 3027'
  },
  seo: {
    title: 'KJK Portfolio',
    description: 'Nuxt3を活用した多言語対応ポートフォリオウェブサイトです。',
    url: 'https://tokyokimportfolio.vercel.app'
  },
  ui: {
    modal: {
      slots: {
        overlay: 'fixed inset-0 data-[state=open]:bg-gray-500/75 data-[state=closed]:bg-black/75',
        content: 'fixed bg-[var(--ui-bg)] divide-y divide-(--ui-border) flex flex-col focus:outline-none',
        header: 'flex items-center gap-1.5 p-4 sm:px-6 min-h-16 bg-black ',
        wrapper: '',
        body: 'flex-1 overflow-y-auto p-4 sm:p-6 bg-white',
        footer: 'flex items-center gap-1.5 p-4 sm:px-6 bg-white',
        title: 'text-white font-semibold',
        description: 'mt-1 text-(--ui-text-muted) text-sm',
        close: 'absolute top-4 end-4'
      },
      variants: {
        transition: {
          true: {
            overlay: 'data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]',
            content: 'data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]'
          }
        },
        fullscreen: {
          true: {
            content: 'inset-0'
          },
          false: {
            content: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-[calc(var(--ui-radius)*2)] shadow-lg ring ring-(--ui-border)'
          }
        }
      }
    }
  }
})
