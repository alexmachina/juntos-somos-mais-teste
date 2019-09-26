# Atomic
App criado com *create-next-app*

## Docker
> docker-compose up

## Ferramentas utilizadas
- NextJs
- React 
- Hooks
- MaterialUI
- Ramda
- Lodash
- Libphonenumber-js
- Shortid

## Fora do escopo porque não deu tempo
- Tela de detalhe do cliente.
- Filtro de localização "Trabalhoso"
- Ducks (Actions, reducers, etc)

## Pontos de atenção
Na descrição do escopo, os critérios de cordenadas não fazem sentido.
Alterei o "max" para valores positivos.

### Filtro por coordenada
#### Antes:
```json
minlon: -2.196998
minlat -46.361899
maxlon: -15.411580
maxlat: -34.276938
```

#### Depois
```json
minlon: -2.196998,
minlat: -46.361899,
maxlon: 15.411580,
maxlat: 34.276938,
```

### Filtro por região
Criei um arquivo com um *de/para* de regiões e estados para os critérios deste filtro.

