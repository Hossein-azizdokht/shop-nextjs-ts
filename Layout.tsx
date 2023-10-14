
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Header from '@/components/nav/nav';
import { ReactNode } from 'react';
// import Footer from '@/components/Footer/Footer'
interface hed {
    title?: string,
    keywords?: string,
    description?: string,
    children?: ReactNode
}

export default function Layout({ title, keywords, description, children }: hed) {
    return (
        <>
            <Head>{title}</Head>
            <meta name="descriptions" content={description} />
            <meta name="keywords" content={keywords} />
            <Header />
            {children}

        </>
    )
}

Layout.defaultProps = {
    title: "پارس تکنلوژی سداد",
    description: "پارس تکنلوژی سداد",
    keywords: 'بانک ملی، سداد، فناوری اطلاعات، پشتیبانی بانک'
}
