function ProductGallery() {
  return (
    <div>
      <div className="lg:max-h-[800px] md:max-h-[810px] max-h-[400px] overflow-hidden rounded-lg">
        <img
          className="aspect-[2/3]"
          src="https://e-commerce-smoky-ten.vercel.app/_next/image?url=https%3A%2F%2Fvaqybtnqyonvlwtskzmv.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fe-commerce-track-images%2Fvoyager-hoodie%2Fvoyager-hoodie-1.jpg&w=1920&q=75"
        />
      </div>

      <div className="mb-12 mt-6 flex gap-4 overflow-hidden">
        <div className="h-[120px] w-[80px] shrink-0 md:h-[185px] md:w-[185px] lg:h-[190px] lg:w-[160px]">
          <img
            className="h-full w-full rounded-lg"
            src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
          />
        </div>
        <div className="h-[120px] w-[80px] shrink-0 md:h-[185px] md:w-[185px] lg:h-[190px] lg:w-[160px]">
          <img
            className="h-full w-full rounded-lg"
            src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
          />
        </div>
        <div className="h-[120px] w-[80px] shrink-0 md:h-[185px] md:w-[185px] lg:h-[190px] lg:w-[160px]">
          <img
            className="h-full w-full rounded-lg"
            src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
          />
        </div>
        <div className="h-[120px] w-[80px] shrink-0 md:h-[185px] md:w-[185px] lg:h-[190px] lg:w-[160px]">
          <img
            className="h-full w-full rounded-lg"
            src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;
