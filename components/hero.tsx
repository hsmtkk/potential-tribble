import Container from '@mui/material/Container';

export default function Hero({ title, subtitle, imageOn = false }: { title: string, subtitle: string, imageOn?: boolean }) {
    return (
        <Container>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {imageOn && <figure>画像</figure>}
        </Container>
    )
}