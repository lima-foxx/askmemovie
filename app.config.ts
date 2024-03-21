export default defineAppConfig({
  ui: {
    primary: 'primaryGreen',
    button: {
      variant: {
        solid: 'text-black ',
        outline: 'text-white  ring-slate-700 bg-slate-900'
      },
      // icon: {
      //   base: 'text-black',
      // }
    },
    container: {
      // padding: 'px-0 sm:px-0 lg:px-0',
      // w-[56rem] lg:w-[64rem] xl:w-[80rem]
      constrained: 'w-[80rem]',

    },
    select: {
      variant: {
        outline:
          'bg-transparent text-white ring-1 ring-slate-600 focus:ring-2 focus:ring-slate-400 ',
      },
      icon: {
        base: 'flex-shrink-0 text-slate-600 dark:text-slate-400',
      },
    },

    selectMenu: {
      background: 'bg-slate-800',
      ring: 'ring-slate-600 ',
      option: {
        color: 'text-slate-400',
        active: 'bg-slate-900 text-white',
      },
    },

    tabs: {
      wrapper: 'space-y-0',
      container:
        'h-[452px] border-x-2 border-b-2 border-slate-700 rounded-b-lg p-3',
      list: {
        base: 'text-slate-400',
        background: 'bg-slate-800',
        marker: {
          background: 'bg-slate-900 ',
        },

        tab: {
          active: 'text-white',
          inactive: 'text-slate-400 ',
        },
      },
    },

    badge: {
      rounded: 'rounded-full'
    },

    card: {
      background: 'bg-slate-900',
      ring: 'ring-0	',
      rounded: 'rounded-none',
      body: {
        padding: 'px-0 py-0 sm:p-0',
      },
    },

    carousel: {
      item: 'basis-full ',
      indicators: { wrapper: 'flex-col items-end  h-[600px] right-4 gap-1 z-10' },
    }
  }
})