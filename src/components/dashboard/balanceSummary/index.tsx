import { HiOutlineInformationCircle } from "react-icons/hi2";

interface Props {
  title: string;
  figure: string | number;
}

const SummaryBalance = ({ title, figure }: Props) => {
  return (
    <div className="summary-balance flex flex-col items-start gap-2 w-full">
      <div className="flex justify-between items-baseline w-full">
        <p className="text-grey text-sm font-medium">{title}</p>
        <HiOutlineInformationCircle className="text-grey cursor-pointer" />
      </div>
      <h3 className="text-[28px] font-bold text-black">
        USD{" "}
        {+figure
          ? Number(figure).toLocaleString("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
            })
          : "0.00"}
      </h3>
    </div>
  );
};

export default SummaryBalance;
