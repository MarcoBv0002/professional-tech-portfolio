# Logo Guide

Use this folder structure:

- `public/logos/`
- `public/images/services/`

Preferred format:

- `SVG` first choice
- `PNG` with transparent background as fallback

Recommended style:

- Monochrome or single-color logos work best on this site
- Best default: white logo on transparent background
- Alternative: cyan/light-blue logo on transparent background
- Avoid full-color logos unless the brand is only recognizable that way
- Avoid black logos because the site uses a dark background

Recommended size:

- `128x128` or `256x256` for stack/service logos
- Keep padding inside the canvas so the logo does not touch the edges

Expected filenames for the current stack:

- `dotnet.svg`
- `python.svg`
- `typescript.svg`
- `javascript.svg`
- `nodedotjs.svg`
- `microsoftsqlserver.svg`
- `postgresql.svg`
- `mysql.svg`
- `amazondynamodb.svg`
- `amazonaws.svg`
- `awslambda.svg`
- `amazonapigateway.svg`
- `amazonrds.svg`
- `amazons3.svg`
- `amazonconnect.svg`
- `redhatopenshift.svg`
- `jenkins.svg`
- `blazor.svg`
- `openai.svg`
- `vercel.svg`
- `googlegemini.svg`

Behavior in the app:

- The site now looks for a local file first: `/logos/<name>.svg`
- If the local logo does not exist, it falls back to the remote icon source automatically

Optional service images:

- Put service illustrations in `public/images/services/`
- Recommended format: `PNG` or `WebP`
- Recommended width: `800px` to `1200px`
- Transparent background or dark-compatible artwork works best
