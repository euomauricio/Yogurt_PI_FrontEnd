import React from 'react'

function ProfileConfig(){
    return (
        <div className='profileConfigDiv'>
            <label for='name'>Nome</label>
            <input type='text' id='name' name='name' placeholder='Digite seu nome' />

            <label>Biografia</label>
            <input type='text' id='bio' name='bio' placeholder='Digite sua biografia' />

            <label for='birth-date'>Data nascimento</label>
            <input type='date' id='birth' name='birth-date' placeholder='Digite sua data de nascimento' />

            <label for='p-image'>Foto do perfil</label>
            <input type='image' id='image' name='p-image' />
            
            <input type='button' id='btn-save' value='Salvar' />
        </div>
    )
}

export default ProfileConfig