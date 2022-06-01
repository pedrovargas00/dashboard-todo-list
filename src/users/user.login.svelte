<script>

    import { navigateTo } from 'svelte-router-spa';
    import UsersService from "../$services/users.service";

    import Form from '../$componentes/form.svelte';
    import Input from '../$componentes/input.svelte';
    import InputPassword from '../$componentes/input.password.svelte';

    let data = {}
    let error = null

    let input = {}
    let addTodo

    async function userLogin() {
        
        const resp = await UsersService.userLogin(data)

        if (resp.error)
            return error = resp.error.message

        const token = resp.data.session.token
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(resp.data.user))

        navigateTo('home')
    }

</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }
</style>

<main class="container is-fluid">
    <div class="columns is-centered is-vcentered is-mobile">
        <div class="column is-narrow" style="width: 100%">
            <Form on:submit={ userLogin } style="justify-content: center" textButton="Iniciar sesión">
                <div class="control block mx-6 my-6 p-4">
                    <figure class="image is-128x128">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="profile">
                    </figure>
                </div>
                <div class="control block">
                    <Input bind:value={ data.email } placeholder="Correo electrónico"></Input>
                </div>
                <div class="control block">
                    <InputPassword bind:value={ data.password } placeholder="Contraseña"></InputPassword>
                </div>
                {#if error}
                    <div class="notification">{ error }</div>
                {/if}
            </Form>
        </div>
    </div>
</main>