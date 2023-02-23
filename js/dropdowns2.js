function dropdown() {
    const SELECT = '[data-dropdown]'
    const SELECT_LIST = '[data-dropdown-list]'
    const SELECT_ARROW = '[data-dropdown-arrow]'
    const SELECT_ACTION = '[data-dropdown-action]'
    const SELECT_TITLE = '[data-dropdown-title]'
    const SELECT_INPUT = '[data-dropdown-input]'
    const SELECT_ITEM = 'dropdownItem'
    const OPEN_SELECT = 'dropdownOpen'

    class Select {
        static attach() {
            const select = new Select()
            select.init()
        }

        init() {
            if (this.findSelect()) {
            this.applyListener()
            }
        }

        applyListener() {
            document.querySelector('*').addEventListener('click', e => {
                const element = e.target.closest(SELECT_ACTION)

                if (this.isCallSelectElement(element)) {
                    if (this.isOpened()) {
                        this.closeSelectList()
                    } else {
                        this.openSelectList()
                    }
                }

                if (this.isCallSelectItemElement(element)) {
                    this.addSelectedValue(element)
                }

                if (this.isCallSelectElement(element) !== true && this.selectOverlayIsClickedElement(element) !== true) {
                    this.closeSelectList()
                }
            })
        }

        isCallSelectElement(element) {
            return element && OPEN_SELECT in element.dataset
        }

        isCallSelectItemElement(element) {
            return element && SELECT_ITEM in element.dataset
        }

        findSelect() {
            const select = document.querySelector(SELECT)

            if (select) {
            this.select = select
            this.selectList = this.select.querySelector(SELECT_LIST)
            this.selectAction = this.select.querySelector(SELECT_ACTION)
            this.selectArrow = this.select.querySelector(SELECT_ARROW)
            this.selectTitle = this.select.querySelector(SELECT_TITLE)            
            this.selectInput = this.select.querySelector(SELECT_INPUT)
            return true
            }
            return false
        }

        isOpened() {
            return this.selectList.classList.contains('dropdown__list--on')            
        }

        openSelectList() {
            this.selectList.classList.add('dropdown__list--on')
            this.selectAction.classList.add('dropdown__select--on')
            this.selectArrow.classList.add('dropdown__arrow--rotate')
        }

        closeSelectList() {
            this.selectList.classList.remove('dropdown__list--on')
            this.selectAction.classList.remove('dropdown__select--on')
            this.selectArrow.classList.remove('dropdown__arrow--rotate')
        }

        addSelectedValue(element) {
            this.selectTitle.innerHTML = element.innerHTML
            this.selectInput.value = element.innerHTML
        }

        selectOverlayIsClickedElement(element) {
            return element && 'dropdown' in element.dataset
        }
    }

    Select.attach()
}

$(function (){
    setTimeout(function() {
        dropdown();
    }, 100);
});