function BoardTemplate({ template }) {
  return (
    <div className="flex gap-[0.8rem] items-center">
      <img className="w-[40px] h-[40px] rounded-[4px]" src={template.img} alt="" />
      <div className="flex flex-col whitespace-nowrap justify-between overflow-hidden text-ellipsis leading-[20px]">
        <span className="text-[1.4rem] font-bold">{template.templateName}</span>
        <span className="text-[1.2rem]">{template.templateName}</span>
      </div>
    </div>
  );
}

export default BoardTemplate;
