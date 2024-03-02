import React from 'react'

const PrimaryButton = ({ title, icon, fullWidth, onClick, ishidden, disabled = false }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`${ishidden ? 'hidden' : 'flex'} items-center justify-center gap-2 text-lg font-bold p-2.5 bg-violet-500 rounded border-violet-800 ${fullWidth ? 'w-full' : ''} text-white  hover:bg-violet-600 disabled:bg-slate-400`}>
            {icon && icon} {title}
        </button>
    )
}

export default PrimaryButton