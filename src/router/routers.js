import Main from '@/components/main'
import ParentView from '@/components/parent-view/parent-view.vue'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'md-laptop',
      title: '商品管理'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '产品管理'
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          icon: 'md-funnel',
          title: '品牌管理'
        },
        component: () => import('@/view/multilevel/level-2-2.vue')
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-funnel',
          title: '分类管理'
        },
        component: () => import('@/view/multilevel/level-2-3.vue')
      }
    ]
  },
  {
    path: '/orderformmg',
    name: 'orderform',
    meta: {
      icon: 'ios-cart',
      title: '订单管理'
    },
    component: Main,
    children: [
      {
        path: 'ofdispose',
        name: 'or_1',
        meta: {
          icon: 'md-funnel',
          title: '订单处理'
        },
        component: () => import('@/view/orderformmg/ofdispose.vue')
      },
      {
        path: 'oftable',
        name: 'or_2',
        meta: {
          icon: 'md-funnel',
          title: '订单类表'
        },
        component: () => import('@/view/orderformmg/oftable.vue')
      },
      {
        path: 'logmanage',
        name: 'or_3',
        meta: {
          icon: 'md-funnel',
          title: '物流管理'
        },
        component: () => import('@/view/orderformmg/logmanage.vue')
      },
      {
        path: 'refund',
        name: 'or_4',
        meta: {
          icon: 'md-funnel',
          title: '退款操作'
        },
        component: () => import('@/view/orderformmg/refund.vue')
      }
    ]
  },
  {
    path: '/paymanage',
    name: 'paymanage',
    meta: {
      icon: 'logo-usd',
      title: '支付管理'
    },
    component: Main,
    children: [
      {
        path: 'producttable',
        name: 'py_1',
        meta: {
          icon: 'md-funnel',
          title: '产品类表'
        },
        component: () => import('@/view/paymanage/producttable.vue')
      },
      {
        path: 'brand',
        name: 'py_2',
        meta: {
          icon: 'md-funnel',
          title: '品牌'
        },
        component: () => import('@/view/paymanage/brand.vue')
      },
      {
        path: 'cfmg',
        name: 'py_3',
        meta: {
          icon: 'md-funnel',
          title: '分类管理'
        },
        component: () => import('@/view/paymanage/cfmg.vue')
      }
    ]
  },
  {
    path: '/shopmanage',
    name: '店铺管理',
    meta: {
      icon: 'ios-home',
      title: '店铺管理'
    },
    component: Main,
    children: [
      {
        path: 'shoptable',
        name: '店铺列表',
        meta: {
          icon: 'md-funnel',
          title: '店铺列表'
        },
        component: () => import('@/view/shopmanage/shoptable.vue')
      },
      {
        path: 'shopaudit',
        name: '店铺审核',
        meta: {
          icon: 'md-funnel',
          title: '店铺审核'
        },
        component: () => import('@/view/shopmanage/shopaudit.vue')
      },
      {
        path: 'shopclassify',
        name: '店铺分类',
        meta: {
          icon: 'md-funnel',
          title: '店铺分类'
        },
        component: () => import('@/view/shopmanage/shopclassify.vue')
      }
    ]
  },
  {
    path: '/statemanage',
    name: '报表管理',
    meta: {
      icon: 'md-list-box',
      title: '报表管理'
    },
    component: Main,
    children: [
      {
        path: 'orderreport',
        name: '订单报表',
        meta: {
          icon: 'md-funnel',
          title: '订单报表'
        },
        component: () => import('@/view/statemanage/orderreport.vue')
      },
      {
        path: 'productsales',
        name: '产品销量',
        meta: {
          icon: 'md-funnel',
          title: '产品销量'
        },
        component: () => import('@/view/statemanage/productsales.vue')
      },
      {
        path: 'deals',
        name: '交易量',
        meta: {
          icon: 'md-funnel',
          title: '交易量'
        },
        component: () => import('@/view/statemanage/deals.vue')
      }
    ]
  },
  {
    path: '/membermanage',
    name: '会员管理',
    meta: {
      icon: 'md-contact',
      title: '会员管理'
    },
    component: Main,
    children: [
      {
        path: 'membertable',
        name: '会员列表',
        meta: {
          icon: 'md-funnel',
          title: '会员列表'
        },
        component: () => import('@/view/membermanage/membertable.vue')
      },
      {
        path: 'grademanage',
        name: '等级管理',
        meta: {
          icon: 'md-funnel',
          title: '等级管理'
        },
        component: () => import('@/view/membermanage/grademanage.vue')
      },
      {
        path: 'memberrecord',
        name: '会员记录',
        meta: {
          icon: 'md-funnel',
          title: '会员记录'
        },
        component: () => import('@/view/membermanage/memberrecord.vue')
      }
    ]
  },
  {
    path: '/adminmanage',
    name: '管理员管理',
    meta: {
      icon: 'md-contacts',
      title: '管理员管理'
    },
    component: Main,
    children: [
      {
        path: 'admintable',
        name: '管理员列表',
        meta: {
          icon: 'md-funnel',
          title: '管理员列表'
        },
        component: () => import('@/view/adminmanage/admintable.vue')
      },
      {
        path: 'permissionset',
        name: '权限设置',
        meta: {
          icon: 'md-funnel',
          title: '权限设置'
        },
        component: () => import('@/view/adminmanage/permissionset.vue')
      },
      {
        path: 'personinfo',
        name: '个人信息',
        meta: {
          icon: 'md-funnel',
          title: '个人信息'
        },
        component: () => import('@/view/adminmanage/personinfo.vue')
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: '组件'
    },
    component: Main,
    children: [
      {
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          icon: 'md-trending-up',
          title: '数字渐变'
        },
        component: () => import('@/view/components/count-to/count-to.vue')
      },
      {
        path: 'drag_list_page',
        name: 'drag_list_page',
        meta: {
          icon: 'ios-infinite',
          title: '拖拽列表'
        },
        component: () => import('@/view/components/drag-list/drag-list.vue')
      },
      {
        path: 'drag_drawer_page',
        name: 'drag_drawer_page',
        meta: {
          icon: 'md-list',
          title: '可拖拽抽屉'
        },
        component: () => import('@/view/components/drag-drawer')
      },
      {
        path: 'org_tree_page',
        name: 'org_tree_page',
        meta: {
          icon: 'ios-people',
          title: '组织结构树'
        },
        component: () => import('@/view/components/org-tree')
      },
      {
        path: 'tree_table_page',
        name: 'tree_table_page',
        meta: {
          icon: 'md-git-branch',
          title: '树状表格'
        },
        component: () => import('@/view/components/tree-table/index.vue')
      },
      {
        path: 'cropper_page',
        name: 'cropper_page',
        meta: {
          icon: 'md-crop',
          title: '图片裁剪'
        },
        component: () => import('@/view/components/cropper/cropper.vue')
      },
      {
        path: 'tables_page',
        name: 'tables_page',
        meta: {
          icon: 'md-grid',
          title: '多功能表格'
        },
        component: () => import('@/view/components/tables/tables.vue')
      },
      {
        path: 'split_pane_page',
        name: 'split_pane_page',
        meta: {
          icon: 'md-pause',
          title: '分割窗口'
        },
        component: () => import('@/view/components/split-pane/split-pane.vue')
      },
      {
        path: 'markdown_page',
        name: 'markdown_page',
        meta: {
          icon: 'logo-markdown',
          title: 'Markdown编辑器'
        },
        component: () => import('@/view/components/markdown/markdown.vue')
      },
      {
        path: 'editor_page',
        name: 'editor_page',
        meta: {
          icon: 'ios-create',
          title: '富文本编辑器'
        },
        component: () => import('@/view/components/editor/editor.vue')
      },
      {
        path: 'icons_page',
        name: 'icons_page',
        meta: {
          icon: '_bear',
          title: '自定义图标'
        },
        component: () => import('@/view/components/icons/icons.vue')
      }
    ]
  },
  {
    path: '/excel',
    name: 'excel',
    meta: {
      icon: 'ios-stats',
      title: 'EXCEL导入导出'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/excel/upload-excel.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/excel/export-excel.vue')
      }
    ]
  },
  // {
  //   path: '',
  //   name: 'doc',
  //   meta: {
  //     title: '文档',
  //     href: 'https://lison16.github.io/iview-admin-doc/#/',
  //     icon: 'ios-book'
  //   }
  // },
  // {
  //   path: '/join',
  //   name: 'join',
  //   component: Main,
  //   meta: {
  //     hideInBread: true
  //   },
  //   children: [
  //     {
  //       path: 'join_page',
  //       name: 'join_page',
  //       meta: {
  //         icon: '_qq',
  //         title: 'QQ群'
  //       },
  //       component: () => import('@/view/join-page.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/update',
  //   name: 'update',
  //   meta: {
  //     icon: 'md-cloud-upload',
  //     title: '数据上传'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'update_table_page',
  //       name: 'update_table_page',
  //       meta: {
  //         icon: 'ios-document',
  //         title: '上传Csv'
  //       },
  //       component: () => import('@/view/update/update-table.vue')
  //     },
  //     {
  //       path: 'update_paste_page',
  //       name: 'update_paste_page',
  //       meta: {
  //         icon: 'md-clipboard',
  //         title: '粘贴表格数据'
  //       },
  //       component: () => import('@/view/update/update-paste.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/tools_methods',
  //   name: 'tools_methods',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'tools_methods_page',
  //       name: 'tools_methods_page',
  //       meta: {
  //         icon: 'ios-hammer',
  //         title: '工具方法',
  //         beforeCloseName: 'before_close_normal'
  //       },
  //       component: () => import('@/view/tools-methods/tools-methods.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/i18n',
  //   name: 'i18n',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'i18n_page',
  //       name: 'i18n_page',
  //       meta: {
  //         icon: 'md-planet',
  //         title: 'i18n - {{ i18n_page }}'
  //       },
  //       component: () => import('@/view/i18n/i18n-page.vue')
  //     }
  //   ]
  // },
  {
    path: '/error_store',
    name: 'error_store',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'error_store_page',
        name: 'error_store_page',
        meta: {
          icon: 'ios-bug',
          title: '错误收集'
        },
        component: () => import('@/view/error-store/error-store.vue')
      }
    ]
  },
  {
    path: '/error_logger',
    name: 'error_logger',
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'error_logger_page',
        name: 'error_logger_page',
        meta: {
          icon: 'ios-bug',
          title: '错误收集'
        },
        component: () => import('@/view/single-page/error-logger.vue')
      }
    ]
  },
  // {
  //   path: '/directive',
  //   name: 'directive',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'directive_page',
  //       name: 'directive_page',
  //       meta: {
  //         icon: 'ios-navigate',
  //         title: '指令'
  //       },
  //       component: () => import('@/view/directive/directive.vue')
  //     }
  //   ]
  // },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
