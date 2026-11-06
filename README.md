# Prévia — Dra. Larissa Torralvo

Site estático de quatro páginas para Harmonização Facial e Odontologia Clínica em Mogi das Cruzes.

## Abrir localmente

No PowerShell, execute:

```powershell
cd C:\Users\Lenovo\Desktop\Backup_Google_Drive\sites\dra-larissa-torralvo\dist
python -m http.server 4173 --bind 127.0.0.1
```

Depois abra `http://127.0.0.1:4173/index.html`.

## Onde editar

- Página inicial: `dist/index.html`
- Apresentação profissional: `dist/sobre.html`
- Procedimentos: `dist/especialidades.html`
- Contato, endereço e mapa: `dist/contato.html`
- Cores, tipografia e layout: `dist/assets/css/styles.css`
- Menu móvel e controle do vídeo: `dist/assets/js/main.js`
- Foto de fallback: `dist/assets/images/dra-larissa.webp` e `dra-larissa.jpg`
- Vídeo do banner: `dist/assets/video/hero-larissa.mp4`

## Verificação

```powershell
node tests/verify-site.mjs
```

## Confirmar antes do site definitivo

- Dias e horários de atendimento.
- Complemento do endereço, se houver.
- Lista final de formações, especializações concluídas e equipe.
- Fotos adicionais do consultório.
- Política de privacidade caso seja adicionado um formulário.

O site não inclui valores, depoimentos ou promessas de resultado.
