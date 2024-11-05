import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { AcertQuestion, ContainerPercentage, SubTitlePercentage, TilePercentage } from "../styles/PercentageAcertStyle";

interface PercentageAcertsProps {
    questionsAcert:number;
    totalquestions:number;
}

export const PercentageAcerts = ({
    questionsAcert,
    totalquestions
}:PercentageAcertsProps) => {

    const getPercentage = (acerts:number, total:number) => {
        const percentage = Math.floor(acerts / total * 100);
        return percentage;
    }
    return (
        <ContainerPercentage>

            <TilePercentage>
                Taxa de acerto
            </TilePercentage>

            <SubTitlePercentage>
               Questões feitas/acertos
            </SubTitlePercentage>
           
            <AcertQuestion>
              {questionsAcert} / {totalquestions}
            </AcertQuestion>

            <SubTitlePercentage>
                Procentagem de acerto
            </SubTitlePercentage>

            
            <Gauge 
               width={200} 
               height={100} 
               value={getPercentage(questionsAcert, totalquestions)} 
               startAngle={-90} 
               endAngle={90}
               
               
               sx={(theme) => ({
                [`& .${gaugeClasses.valueArc}`]: {
                    fill: '#49FC79', 
                },
                [`& text`]: { 
                    fill: '#FFF', 
                    fontSize: '30px',
                },
               })}
            />

        </ContainerPercentage>
    )
};

