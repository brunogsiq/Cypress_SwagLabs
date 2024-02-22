const locators= {
    tLogin: {
        logotipo: '.bot_column',
        formLogin: '#login_button_container',
        inpUser: '#user-name',
        inptPass: '#password',
        btnLogin: '#login-button',
        divAlertaLogin: 'h3',
        btnAlertLogin: 'h3 > button > svg'
    },
    tProducts: {
        divTitleProd: '.product_label',
        btnOpenMenu: '.bm-burger-button > button',
        btnFilter: '.product_sort_container'
    },
    tMenuLat: {
        divMenuLat: '.bm-menu',
        optAllItems: '#inventory_sidebar_link',
        optAbout: '#about_sidebar_link',
        optLogout: '#logout_sidebar_link',
        optResetAppState: 'reset_sidebar_link',
        btnCloseMenu: '.bm-cross-button > button'
    }
}
export default locators;