import DarkModeToggle from '../../ui/DarkModeToggle';

function EmptyActivity() {
  return (
    <div className="mb-[16px] flex w-full flex-col rounded-[4px] [box-shadow:var(--ds-shadow-raised,_0px_1px_1px_#091e4240,_0px_0px_1px_#091e424f)]">
      <div className="h-[108px] min-h-[100px] w-full rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] bg-[url(https://trello.com/assets/e55b3540e5c1f06a51d7.svg)] bg-center"></div>
      <div className="box-border flex w-full flex-auto flex-col p-[16px]">
        <span className="text-center text-[1.6rem] font-semibold leading-[24px] tracking-[0]">
          Stay on track and up to date
        </span>
        <span className="my-[10px] text-center text-[1.4rem] leading-[20px] tracking-[0]">
          Invite people to boards and cards, leave comments, add due dates, and we&lsquo;ll show the most important
          activity here.
        </span>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default EmptyActivity;
