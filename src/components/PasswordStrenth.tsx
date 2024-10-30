import { ChangeEvent, useState } from "react";
import { InputLabel } from "../styles/FormStyle";

interface PasswordStrengthProps {
    placeholder: string;
    onChange: (password: string) => void;
    value:string;
}

const strengthLabels = ["fraca", "media", "forte"];

export const PasswordStrength = ({ onChange, placeholder, value }: PasswordStrengthProps) => {
    const [strength, setStrength] = useState<string>("");

    const getStrength = (password: string) => {
        let indicator = -1;

        if (/[a-z]/.test(password)) indicator++;
        if (/[A-Z]/.test(password)) indicator++; 
        if (/[0-9]/.test(password)) indicator++; 
        if (/\W/.test(password)) indicator++; 
        if (password.length >= 16) indicator++; 

        return strengthLabels[Math.min(indicator, strengthLabels.length - 1)];
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const passwordValue = event.target.value;
        const passwordStrength = getStrength(passwordValue);
        setStrength(passwordStrength);
        console.log(`Strength: ${passwordStrength}`); 
        onChange(passwordValue);
    };

    return (
        <>
            <InputLabel
                name="password"
                spellCheck="false"
                type="password"
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
            <div className={`bars ${strength}`}>
                <div style={{
                    background: strength === "fraca" ? "#e24c71" :
                               strength === "media" ? "#f39845" :
                               strength === "forte" ? "#57c558" : "transparent",
                    height: 6,
                    width: strength === "fraca" ? '33.33%' :
                           strength === "media" ? '66.66%' :
                           strength === "forte" ? '100%' : '0%', 
                    transition: 'width 0.4s ease',
                    borderRadius:3,
                    marginTop:10,
                    marginBottom:10,

                }}></div>
            </div>
            <div style={{color:'gray'}} className="strength">
                {strength && ` senha ${strength}`}
            </div>
        </>
    );
};
