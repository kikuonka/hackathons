import Button from './Button.tsx'

import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Typography,
    Box,
    Snackbar,
    Alert,
} from '@mui/material'
import {useState} from 'react'

type Props = {
    open: boolean
    onClose: () => void
}

const RegistrationForm = ({ open, onClose }: Props) => {
    const [showShackbar, setShowSnackbar] = useState(false)

    const handleSubmit = () => {
        onClose()
        setShowSnackbar(true)
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                fullWidth
                maxWidth={false}
                PaperProps={{
                    sx: {
                        width: '800px',
                        backgroundColor: "#FFFFFF",
                        border: 2,
                        borderColor: '#308C78',
                        paddingY: '40px',
                        paddingX: '100px',
                    },
                }}
                BackdropProps={{
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(1px)',
                    },
                }}
                sx={{
                    '& .MuiDialog-container': {
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                }}>
                <DialogTitle
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'normal',
                        fontSize: '34px',
                        margin: 0,
                        padding: 0,
                        paddingBottom: '20px',
                    }}>
                    Регистрация
                </DialogTitle>
                <DialogContent className='flex flex-col gap-[30px]'>
                    <Typography
                        variant='h6'
                        className='flex align-center justify-center'>
                        Зарегистрируйтесь для участия в хакатоне
                    </Typography>
                    <Box className='flex flex-col gap-[20px]'>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#308C78',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#308C78',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#308C78',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: '#308C78',
                                    },
                                },
                            }}
                            label='ФИО'
                            fullWidth />
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#308C78',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#308C78',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#308C78',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: '#308C78',
                                    },
                                },
                            }}
                            label='Электронная почта'
                            fullWidth />
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#308C78',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#308C78',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#308C78',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: '#308C78',
                                    },
                                },
                            }}
                            label='Название команды'
                            fullWidth />
                    </Box>
                    <Box className='flex justify-center'>
                        <Button
                            large
                            pathname={'#'}
                            name='Зарегистрироваться'
                            onClick={handleSubmit} />
                    </Box>
                </DialogContent>
            </Dialog>
            <Snackbar
                open={showShackbar}
                autoHideDuration={3000}
                onClose={() => setShowSnackbar(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert
                    severity='success'
                    onClose={() => setShowSnackbar(false)}>
                    Успешно!
                </Alert>
            </Snackbar>
        </>
    )
}

export default RegistrationForm;
