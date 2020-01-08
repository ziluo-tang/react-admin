export default [
    {
        title: '首页',
        key: '/admin/home',
        icon: 'home',
        isLevel: true
    },
    {
        title: 'UI',
        key: '/admin/ui',
        icon: 'underline',
        isLevel: false,
        children: [
            {
                title: '表格',
                key: '/admin/ui/table',
                isLevel: true
            },
            {
                title: '表单',
                key: '/admin/ui/form',
                isLevel: true
            },
            {
                title: '弹框',
                key: '/admin/ui/modal',
                isLevel: true
            }
        ]
    },
    {
        title: '城市管理',
        key: '/admin/city',
        icon: 'area-chart',
        isLevel: true
    },
    {
        title: '订单管理',
        key: '/admin/order',
        icon: 'file-text',
        isLevel: true
    },
    {
        title: '员工管理',
        key: '/admin/user',
        icon: 'user',
        isLevel: true
    },
    {
        title: '车辆地图',
        key: '/admin/map',
        icon: 'alibaba',
        isLevel: true
    },
    {
        title: '权限设置',
        key: '/admin/config',
        icon: 'setting',
        isLevel: true
    }
]