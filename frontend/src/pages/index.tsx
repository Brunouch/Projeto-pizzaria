import { useContext, FormEvent, useState } from 'react';
import Head from 'next/head';
import logoImg from '../../public/logo.svg';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import {Input} from '../components/ui/Input';
import {Button} from '../components/ui/Button';
import Link from 'next/link';
import {AuthContext} from '../contexts/AuthContext';
import {toast} from 'react-toastify';
import {canSSRGuest} from '../utils/canSSRGuest'


export default function Home() {

  const {signIn, } = useContext(AuthContext);

  const [email, setEmail] = useState('')
  const [password, setPassoword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handlelogin(event: FormEvent){
    event.preventDefault();

    if(email === '' || password === ''){
      toast.error("Preencha todos os campos")
      return;
    }

    setLoading(true);

    let data = {
      email,
      password
    }

    await signIn(data)

    setLoading(false);
  }
  return (
        <>
        <Head>
          <title>Projeto Pizza - Faça seu login</title>
        </Head>

        <div className={styles.containerCenter}>
          <Image src={logoImg} alt='Logo Sujeito Pizzaria'/>

          <div className={styles.login}>
            <form onSubmit={handlelogin}>
              <Input
              placeholder='Digite seu email'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />

              <Input
              placeholder='Digite sua senha'
              type='password'
              value={password}
              onChange={(e) => setPassoword(e.target.value)}
              />  

              <Button
                type='submit'
                loading={loading}
              >
                Acessar
              </Button>
            </form>
            
            <Link href="/signup">
              <p className={styles.text}>Não possui uma conta? Cadastra-se</p>  
            </Link>
          </div>
        </div>
        </>
         
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props:{}
  }
})

 