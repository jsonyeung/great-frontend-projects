function PriceTag({ value, original }) {
  return (
    <div className="mb-2 text-3xl font-medium">
      <span>{value}</span>

      {original != null && (
        <span className="ml-2 text-lg text-neutral-400 line-through">
          {original}
        </span>
      )}
    </div>
  );
}

export default PriceTag;
