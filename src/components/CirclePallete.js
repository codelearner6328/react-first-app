import React, { useRef, useState, useEffect } from 'react'
import '../customStyle.css';
import $ from 'jquery';
export default function CirclePallete() {

    // var _$paletteElement = $('.palette_color');

    // function _colorizePaletteItems() {
    //     $.each(_$paletteElement, function (i) {
    //         console.log('test');
    //         $(this).css('background-color', $(this).data('color'));
    //     })
    // }

    // function _togglePalette() {
    //     $('.palette_color__main').on('click', function () {
    //         alert('here');
    //         $('.palette').toggleClass('palette__opened');
    //     })
    // }
    // function _initSetColor() {
    //     $('.palette_color').on('click', function () {
    //         var color = $(this).data('color');
    //         _setColor(color);
    //     })
    // }

    // function _setColor(color) {
    //     $('.palette_color__main').css('background', color);
    //     $('.wrapper').css('background', color);
    // }


    // react approach
    // const _paletteElement = document.querySelectorAll('.palette_color');
    // const colorizePaletteItems = () => {
    //     console.log('test');
    //     _paletteElement.forEach((element) => {
    //         console.log('test');
    //         element.style.backgroundColor = element.getAttribute('data-color');
    //     });
    // };
    // useEffect(() => {
    //     console.log('Component mounted');
    //     colorizePaletteItems();
    // }, []); // Run the function once when the component mounts


    const wrapperRef = useRef(null);
    const paletteRef = useRef(null);
    const paletteColorMainRef = useRef(null);
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF", "#FF33FF", "#FF5733", "#33FF57", "#5733FF", "#FFFF33"];

    const _togglePalette = () => {
        // console.log('toggle fun');
        // $('.palette').toggleClass('palette__opened');
        paletteRef.current.classList.toggle('palette__opened');
    }


    const _initSetColor = () => {
        const paletteColors = document.querySelectorAll('.palette_color');
        paletteColors.forEach((color) => {
            color.addEventListener('click', () => {
                const clickedColor = color.dataset.color;
                setColor(clickedColor);
            });
        });
    };
    const setColor = (color) => {
        paletteColorMainRef.current.style.background = color;
        // wrapperRef.current.style.background = color;

        // coder , Update the 'on' class background color dynamically
        const onClassElements = document.querySelectorAll('.on');
        // console.log(onClassElements);
        if (onClassElements) {
            onClassElements.forEach((element) => {
                element.style.backgroundColor = color;
            });
        }
        // end of coder

    };
    // _colorizePaletteItems();
    useEffect(() => {
        // Call _togglePalette once the component is fully rendered
        _togglePalette();
    }, []); // Empty dependency array ensures the effect runs only once
    _initSetColor();

    return (
        <div className="wrapper" ref={wrapperRef}>
            <div className="palette" ref={paletteRef}>
                <div className="palette_item_wrapper">
                    {/* <div data-color="#e169c3" className="palette_color"></div>
                    <div data-color="#b569e1" className="palette_color"></div>
                    <div data-color="#7169e1" className="palette_color"></div>
                    <div data-color="#69b8e1" className="palette_color"></div>
                    <div data-color="#69e1d4" className="palette_color"></div>
                    <div data-color="#6ce169" className="palette_color"></div>
                    <div data-color="#bee169" className="palette_color"></div>
                    <div data-color="#e1a169" className="palette_color"></div>
                    <div data-color="#83091d" className="palette_color"></div>
                    <div data-color="#83091d" className="palette_color"></div> */}

                    {colors.map((color, index) => (
                        <div
                            key={index}
                            data-color={color}
                            className="palette_color"
                            style={{ backgroundColor: color }}
                            ref={paletteColorMainRef}
                        ></div>
                    ))}

                </div>
                <div className="palette_color__main" onClick={_togglePalette}></div>
            </div>
        </div>
    )
}
