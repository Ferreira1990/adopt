import Customcard from './components/Customcard'
import Header from './components/Header'
import "./styles/title.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.css"
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Header title="Adopta un perrito" />

      <div className='puppy'>
        <Customcard
          image="https://img.freepik.com/free-psd/adorable-jack-russell-retriever-puppy-portrait_53876-74008.jpg?w=740&t=st=1691171700~exp=1691172300~hmac=5c2cd63c8406717fa738dd3154f9a2e7f94fa7ef6c89b96f0ae7980fa4ee9a2b"
          text="Thor es el amigo que necesitas, te alegrara la vida, juguetón!."
          title="Thor"
          color="warning"
          text2="Adopta ya!"
        />

        <Customcard
          image="https://img.freepik.com/free-photo/portrait-funny-little-dog_23-2148366899.jpg?w=740&t=st=1691173891~exp=1691174491~hmac=faaa57100d1268d5e06a89319e18dd36ee6bcf1153c093dd6c70ec9b82aba4c2"
          text="Kratos es el guardian que necesitas! poderoso y valiente!."
          title="Kratos"
          color="warning"
          text2="Adopta ya!"
        />

        <Customcard
          image="https://img.freepik.com/free-photo/american-beagle-puppy_53876-74781.jpg?w=740&t=st=1691172811~exp=1691173411~hmac=6d7dd94690db520d31b86774e9d7d831e0f0c6880bfdadbfe9d678aa0b05512c"
          text="Elon, el perrito mas inteligente, te acompañara en tus aventuras!."
          title="Elon"
          color="warning"
          text2="Adopta ya!"
        />

        <Customcard
          image="https://img.freepik.com/free-photo/cute-smiley-dog-holding-empty-banner_23-2148865723.jpg?w=740&t=st=1691173058~exp=1691173658~hmac=6383d5dbad6637b98e01a11d78933ae2242d37cde6b1a7be90a87b7d93626f8e"
          text="Viejito es el perro que no necesita modales! te cuidara muy bien!."
          title="Viejito"
          color="warning"
          text2="Adopta ya!"
        />

      </div>

      <Footer />


    </>
  )
}

export default App
