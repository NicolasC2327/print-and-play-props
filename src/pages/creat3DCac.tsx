import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatAI from "@/components/SamuelAICostumize/chatAI"

const Creat3DCac = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ChatAI />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Crear Personaje 3D</h1>
        <p className="mt-4 text-muted-foreground">
          Aquí podrás cotizar tu personaje 3D dependiendo de tus preferencias.
        </p>
        {/* 👇 Aquí después agregamos el formulario o la integración con IA */}
      </main>
      <Footer />
    </div>
  );
};

export default Creat3DCac;