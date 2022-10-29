
import React from 'react';
import image from '../../Assets/images/loading.gif';
import './Style/Loader.css';

interface LoaderProps {
    isActive: boolean,
    isAbsolute?: boolean,
    isWithoutText?: boolean,
    isSmall?: boolean
}

export const Loader = ({ isActive, isAbsolute = false, isWithoutText = true, isSmall = false }: LoaderProps) => (
    <>
        {isActive && (
            <div
                className={`spinner-wrapper${isAbsolute ? '  is-absolute' : ''}${(isSmall && ' is-small') || ''
                    }`}
            >
                <div className='app-spinner'>
                    <img src={image} alt='...' className='spinner-img' />
                    {!isWithoutText && <span className='fz-15px'>Please Wait ...</span>}
                </div>
            </div>
        )}
    </>
);

