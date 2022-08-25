import React, { useEffect } from "react";
import styled from "styled-components";

const DropdownInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    position: relative;
    padding: 10px;
    border-radius: 10px;
    flex: 1;

    ul.selector-options {
        position: absolute;
        top: 100%;
        width: calc(100% - 20px);
        display: block;
        opacity: 1;
        border-radius: 10px;
        color: white;
        transition: all 0.3s ease;

        &.hide {
            opacity: 0;
        }
            
        &:after {
            position: absolute;
            top: -7px;
            left: 20px;
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 8px solid #5f5f61;
            content: '';
            display: block;
        }

        li {
            padding: 10px;
            background-color: #5f5f61;
        }

        li:first-child {
            border-start-start-radius: 10px;
            border-start-end-radius: 10px;
        }

        li:last-child {
            border-end-start-radius: 10px;
            border-end-end-radius: 10px;
        }

        li:hover {
            cursor: pointer;
        }
    }
`

const DropdownInputLabel = styled.label`
    margin-bottom: 10px;
`

const DropdownInputComponent = styled.select`
    padding: 10px;
    padding-right: 25px;
    border: none;
    background: #F1F0F6;
    border-radius: 10px;
    outline: none;
   
    appearance: none;
    background-position: calc(100% - 5px) 50%;
    background-size: 14px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf-8, <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgba(0, 0, 0, 1);transform: ;msFilter:;'><path d='M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z'></path></svg>");
`

const DropdownInput = ({ title, children, value, setValue, id, style }) => {
    const createNewSelectorOptions = () => {
        const selectElement = $(`select#${id}`);
        const selectParentElement = selectElement.parent();

        if (!(selectParentElement.children('ul').length > 0)) {
            selectElement.each(index => {
                const select = $(selectElement[index]).children();
                let dropdown = '<ul class="selector-options hide">';

                select.each(index => {
                    dropdown += `<li>${$(select[index]).attr('label')}</li>`
                })
                dropdown += `</ul>`;

                selectParentElement.append(dropdown)
            })
        }
    }

    const updateDefaultSelect = () => {
        const selectElement = $(`select#${id}`);
        const selectorOptionElement = selectElement.parent().children('ul');
        const optionsElement = selectorOptionElement.children('li');

        selectElement.mousedown((event) => {
            event.preventDefault();
        })

        selectElement.on('click', (event) => {
            selectorOptionElement.toggleClass('hide')
        })

        optionsElement.each((index) => {
            const option = $(selectElement.children('option')[index])
            $(optionsElement[index]).on('click', () => {
                setValue(option.val())
                selectorOptionElement.toggleClass('hide')
            })
        })
    }

    useEffect(() => {
        createNewSelectorOptions()
        updateDefaultSelect()
    }, [])

    return <DropdownInputContainer style={style}>
        <DropdownInputLabel><strong>{title}</strong></DropdownInputLabel>

        <DropdownInputComponent id={id} value={value} readOnly>
            {children}
        </DropdownInputComponent>
    </DropdownInputContainer>
}

export default DropdownInput;
