import { Children, cloneElement, useEffect, useState } from 'react';
import StrelLevo from './../../image/icons/iconStrelLevo.png';
import StrelPravo from './../../image/icons/iconStrelPravo.png';
import './Carousel.css';

export const PAGE_WIDTH = 600;

export const Carousel = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const btnRightSlide = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1)) 
            return Math.max(maxOffset, newOffset)
        })
    }

    const btnLeftSlide = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
    }, [])

    return (
        <div className="main-container">
            <button className="slideBtn" onClick={btnLeftSlide}><img src={StrelLevo} alt="" /></button>
            <div className="window">
                <div 
                    className="all-pages-container"
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}>
                    {pages}
                </div>
            </div>
            <button className="slideBtn" onClick={btnRightSlide}><img src={StrelPravo} alt="" /></button>
        </div>
    )
}