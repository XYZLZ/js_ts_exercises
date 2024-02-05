# React + TypeScript + Vite exercises

estos ejercicios son hechos por mi mismo y se utilizan con fines de aprendizaje.

## Introduccion a React + typescript

## Primer Ejerccicio
Deseo crear un boton reutilizable para mi pagina web. el cual necesita los siguientes atributos:
-  todas las propiedades del (base) del boton
- tamaños establecidos para el boton
- dichos tamaños deben ser opcionales 
- nombre del boton
- typescript me debe indicar los atributos que requiere el boton.

El componente debe ser importado en el archivo (app.tsx) 
### Pasos para realizar 
- Crear el componente Button.
- Creat una interfaz para el boton que contenga los atributos necesarios.
- crear el boton en el componente.
- crear un objeto con los diferentes tamaños del boton.
- Configure the top-level `parserOptions` property like this:

```tsx
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variantsize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'; 
    title: string
}
const Buttom = ({variantsize, title, ...props}: Props) => {

    const variantsSizes = {
    sm: 'w-[8rem]',
    md: 'w-[16rem]',
    lg: 'w-[24rem]',
    xl: 'w-[38rem]',
    full: 'w-full',
  };

    return (
        <>
            <buttom className={`${variantsize && variantsSizes[variantsize]}`} {...props}>{title}</buttom>
        </>
    )
}

export default Buttom
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
