import { useState, useEffect, useRef } from "react";
import { FaWindowClose } from "react-icons/fa";
import gsap from "gsap";
import { WiHumidity, WiThermometer, WiStrongWind, WiSunrise } from "react-icons/wi";

interface WeatherDataTypes {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    condition: {
        text: string;
        icon: string;
    };
}

function Weather() {
    const [isClimateVisible, setIsClimateVisible] = useState(false);
    const [weatherData, setWeatherData] = useState<WeatherDataTypes | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const titleRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );
        }
    }, []);

    async function handleClick() {
        if (isLoaded) {
            setIsClimateVisible(true);
            return;
        }

        const apiKey = "a69334c28e1542a8aa8185424242611";
        const city = "marica";
        const lang = "pt";
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=${lang}&aqi=no`;

        const res = await fetch(url);
        if (res.status !== 200) {
            console.log("erro");
            return;
        }

        const { current } = await res.json();
        setWeatherData(current);
        setIsClimateVisible(true);
        setIsLoaded(true);
    }

    return (
        <section
            id="climate"
            className="h-screen w-screen flex flex-col items-center justify-center p-6 bg-blue-50"
        >
            {/* Seção inicial */}
            <div className={`flex flex-col items-center justify-center transition-all duration-500 ${isClimateVisible ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <h1
                    ref={titleRef}
                    className="text-3xl md:text-5xl font-light text-gray-800 text-center mb-6"
                >
                    Obtenha os dados do clima em tempo real
                </h1>
                <button
                    className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform"
                    onClick={handleClick}
                >
                    Obter dados
                </button>
            </div>

            {/* Seção de clima */}
            {weatherData && (
                <div
                    className={`relative flex flex-col items-center gap-6 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ${isClimateVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                    style={{
                        backgroundImage: `url("data:image/webp;base64,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")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay para legibilidade */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    <button
                        className="absolute top-4 right-4 text-white hover:text-red-500 z-20 transition-colors"
                        onClick={() => setIsClimateVisible(false)}
                    >
                        <FaWindowClose size={24} />
                    </button>

                    <div className="relative z-10 flex flex-col items-center gap-4 p-6 w-full bg-white/80 rounded-b-2xl shadow-inner">
                        <div className="flex flex-col items-center gap-2">
                            <img
                                src={weatherData.condition.icon}
                                alt="icone"
                                className="w-20 h-20"
                            />
                            <p className="text-lg font-medium text-gray-800 text-center">
                                {weatherData.condition.text}
                            </p>
                        </div>

                        <div className="w-full flex flex-col gap-3">
                            <p className="flex items-center gap-3 justify-center text-gray-800">
                                <WiThermometer size={24} className="text-red-400" />
                                Temperatura: <span className="font-semibold">{weatherData.temp_c}ºC</span>
                            </p>
                            <p className="flex items-center gap-3 justify-center text-gray-800">
                                <WiSunrise size={24} className="text-yellow-400" />
                                Sensação Térmica: <span className="font-semibold">{weatherData.feelslike_c}ºC</span>
                            </p>
                            <p className="flex items-center gap-3 justify-center text-gray-800">
                                <WiHumidity size={24} className="text-blue-400" />
                                Umidade: <span className="font-semibold">{weatherData.humidity}%</span>
                            </p>
                            <p className="flex items-center gap-3 justify-center text-gray-800">
                                <WiStrongWind size={24} className="text-green-400" />
                                Vento: <span className="font-semibold">{weatherData.wind_kph} km/h</span>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Weather;
