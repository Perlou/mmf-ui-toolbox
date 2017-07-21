/**
 * app config
 * @author Perlou(perloukevin@gmail.com)
 */

export default {
    colorArr: [
        {
            name: 'Light',
            createdBy: 'primary',
            hsl: [0, 100, 67],
            components: []
        },
        {
            name: 'Dark',
            createdBy: 'primary',
            hsl: [0, 77, 49]
        },
        {
            name: 'Light Black',
            createdBy: 'baseBlack',
            hsl: [5, 27, 27],
            components: [
                'dark-menu-item'    
            ]
        },
        {
            name: 'Extra Light Black',
            createdBy: 'baseBlack',
            hsl: [2, 19, 35],
            components: [
                'link-color',
                'collapse-header-color'
            ]
        },
        {
            name: 'Base Silver',
            createdBy: 'baseBlack',
            hsl: [3, 16, 58],
            components: [
                'border-hover-color'
            ]
        },
        {
            name: 'Light Silver',
            createdBy: 'baseBlack',
            hsl: [3, 23, 67],
            components: [
                'select-close-hover-color',
                'message-close-hover-color',
                'notification-close-hover-color',
                'input-placeholder-color',
                'pagination-button-color',
                'datepicker-icon-color',
                'scrollbar'
            ]
        },
        {
            name: 'Extra Light Silver',
            createdBy: 'baseBlack',
            hsl: [0, 26, 80],
            components: [
                'border-color',
                'select-input-color',
                'select-option-disabled-color',
                'message-close-color',
                'notification-close-color',
                'input-icon-color',
                'input-disabled-placeholder-color',
                'button-disabled-color',
                'switch-off-color',
                'dialog-close-color',
                'slider-stop-background-color',
                'slider-disable-color',
                'rate-icon-color'
            ]
        },
        {
            name: 'Base Gray',
            createdBy: 'baseBlack',
            hsl: [0, 28, 86],
            components: [
                'disabled-border-base',
                'transfer-border-color',
            ]
        },
        {
            name: 'Light Gray',
            createdBy: 'baseBlack',
            hsl: [10, 33 ,92],
            components: [
                'select-option-hover-background',
                'switch-disabled-color',
                'tag-gray-fill',
                'tag-gray-border',
                'dropdown-menuItem-hover-fill',
                'slider-runway-background-color',
                'datepicker-cell-hover-color',
                'transfer-item-hover-background'
            ]
        },
        {
            name: 'Extra Light Gray',
            createdBy: 'baseBlack',
            hsl: [6, 33, 95],
            components: [
                'disabled-fill-base',
                'button-disabled-fill',
                'table-header-background',
                'menu-item-fill'
            ]
        }
    ]
}
