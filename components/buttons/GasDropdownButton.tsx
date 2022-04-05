import GasIcon from '../icons/GasIcon';
import DownIcon from '../icons/DownIcon';

export default function GasDropdownButton() {
  return (
    <div className="flex items-center gap-[10px] self-start rounded-lg border border-[#25262D] px-2 py-[10px]">
      <GasIcon />
      <span className="text-white/60">245</span>
      <div>
        <DownIcon />
      </div>
    </div>
  );
}
