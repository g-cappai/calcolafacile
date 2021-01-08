import CalcPageTemplate from "../../components/templates/calc-page-template";

const { title, desc } = {
  title: "Titolo",
  desc:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio quibusdam adipisci quam fugiat consectetur reprehenderit eaque eos molestias debitis. Sint quod quas nam delectus id itaque dolores fuga eaque.",
};

export default function CalcoloPercentuale() {
  return (
    <CalcPageTemplate title={title} desc={desc}>
      <p>Primo</p>
      <p>Secondo</p>
      <p>Ter</p>
    </CalcPageTemplate>
  );
}

//QUESTA DOVREBBE ESSERE LA PAGINA DI TEMPLATE
