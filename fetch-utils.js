const SUPABASE_URL = 'https://edanuxzgkcleuccdeakc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkYW51eHpna2NsZXVjY2RlYWtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzNjg3OTMsImV4cCI6MTk2Nzk0NDc5M30.HH23nUpy7jCA4AgRRgpIk8M-fwc5zqvBLuE1Muk_lps';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./Workshops/index.html');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}


function checkError({ data, error }) {
    return error ? console.error(error) : data;
}


export async function getWorkshops() {
    const response = await client.from('workshops').select('*, participants(*)');
    if (response.data) {
        console.log(response.data);
        return response.data;
        
    } else {
        return checkError(response);
    }
}

export async function deleteParticipant(id) {
    const response = await client.from('participants').delete().match({ id: id}).single();
    return checkError(response);
}

export async function createParticipant(participant) {
    const response = await client.from('participants').insert(participant);
    if (response.data) {
        return response.data;
    }
    return checkError(response);
}