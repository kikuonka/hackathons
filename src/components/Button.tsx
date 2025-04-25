import { Typography } from '@mui/material'
import { motion } from 'framer-motion'

import useHandleClick from '../functions/useHandleClick.tsx'

type ButtonProps = {
    large?: boolean,
    pathname?: string,
    name: string,
    onClick?: () => void,
}

function Button({ pathname, name, onClick, large}: ButtonProps) {
    const handleClick = useHandleClick()

    const handleButtonClick = () => {
        if (pathname) handleClick(pathname)
        if (onClick) onClick()
    }

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}>
                {large && (
                    <button
                        onClick={handleButtonClick}
                        className='bg-[#308C78] border border-[#000000] cursor-pointer h-[50px] w-[210px]'>
                        <Typography
                            className='bg-transparent text-[#FFFFFF]'
                            variant='body1'
                            component='span'>
                            {name}
                        </Typography>
                    </button>
                )}
                {!large && (
                    <button
                        onClick={handleButtonClick}
                        className='bg-[#308C78] border border-[#000000] cursor-pointer h-[50px] w-[200px]'>
                        <Typography
                            className='bg-transparent text-[#FFFFFF]'
                            variant='body1'
                            component='span'>
                            {name}
                        </Typography>
                    </button>
                )}
            </motion.div>
        </>
    )
}

export default Button
