import { useAppSelector } from "../redux/hooks";

export default function CartButton() {
  const items = useAppSelector((state) => state.cart.items);
  const totalQty = items.reduce((acc, item) => acc + item.qty, 0);

  return (
    <button className="px-4 py-2 rounded text-white" style={{ backgroundColor: "#26619A" }}>
      Cart ({totalQty})
    </button>
  );
}
