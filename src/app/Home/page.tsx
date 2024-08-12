import Image from "next/image";

const Home = () => {
  return (
		<div>
			<p>Homeページ</p>
			<Image
            src="/cattle_y.png" //配置した画像のパスを記述する。
            alt="Top Image"
            layout="fill"
            objectFit="cover"
          />
		</div>
	)
}
export default Home;