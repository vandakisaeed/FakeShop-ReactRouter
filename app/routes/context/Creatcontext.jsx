import { Dcontext } from "./Usecontext"

export const Creatcontext = ({ children, value }) => {
  return (
    <Dcontext.Provider value={value}>
      {children}
    </Dcontext.Provider>
  )
}