import Head from 'next/head';
import logoImg from '../../../public/logo.svg';
import styles from '../../../styles/Home.module.scss';
import Image from 'next/image';
import {Input} from '../../components/ui/Input';
import {Button} from '../../components/ui/Button';
import Link from 'next/link';

export default function Signup() {
  return (
        <>
        <Head>
          <title>Faça seu cadastro agora</title>
        </Head>

        <div className={styles.containerCenter}>
          <Image src={logoImg} alt='Logo Sujeito Pizzaria'/>

          <div className={styles.login}>

            <h1>Criando sua conta</h1>

            <form>

              <Input
              placeholder='Digite seu nome'
              type='text'
              />

              <Input
              placeholder='Digite seu email'
              type='text'
              />

              <Input
              placeholder='Digite sua senha'
              type='password'
              />  

              <Button
                type='submit'
                loading={false}
              >
                Cadastrar
              </Button>
            </form>
            
            <Link href="/">
              <p className={styles.text}>Já possui uma conta? Faça login</p>  
            </Link>
          </div>
        </div>
        </>
         
  )
}
