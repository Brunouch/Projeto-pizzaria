import Head from 'next/head';
import logoImg from '../../public/logo.svg';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import {Input} from '../components/ui/Input';
import {Button} from '../components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
        <>
        <Head>
          <title>Projeto Pizza - Faça seu login</title>
        </Head>

        <div className={styles.containerCenter}>
          <Image src={logoImg} alt='Logo Sujeito Pizzaria'/>

          <div className={styles.login}>
            <form>
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
