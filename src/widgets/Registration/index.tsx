import { useState } from "react"
import { Flex } from "shared/ui"
import { RoleSelection } from "./RoleSelection"
import { RegistrationForm } from "./RegistrationForm"

const Registration = () => {
    const [option, setOption] = useState('choice')
    const [role, setRole] = useState<string>()

    return (
        <Flex
            w='100%'
            h='100%'
            justifyContent='center'
            alignItems='center'
            gap='90px'
        >
            {option === 'choice' && (
                <RoleSelection
                    setOption={setOption }
                    setRole={setRole}
                />
            )}
            {option === 'registration' && (
                <RegistrationForm role={role} />
            )}
        </Flex>

    )
}

export { Registration }