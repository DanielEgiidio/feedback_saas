import CopyBtn from "../../../../../components/copy-button";

const page = ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  if (!params.projectId) return <div>Project ID Inválido</div>;
  if (!process.env.WIDGET_URL) return <div>WIDGET_URL Em Falta </div>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Comece a coletar os feedbacks</h1>
      <p className="text-lg text-secondary-foreground">
        Incorpore esse código no seu site
      </p>
      <div className="bg-blue-950 p-6 rounded-md mt-6 relative">
        <code className=" text-white">
          {`<my-widget project-id="${params.projectId}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyBtn
          text={`<my-widget project="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        />
      </div>
    </div>
  );
};

export default page;
