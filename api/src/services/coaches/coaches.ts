import { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/api/dist/types'
import { db } from 'src/lib/db'

export const coaches = () => {
  return db.coach.findMany()
}

export const coach = ({ id }: Prisma.CoachWhereUniqueInput) => {
  return db.coach.findUnique({
    where: { id },
  })
}

interface CreateCoachArgs {
  input: Prisma.CoachCreateInput
}

export const createCoach = ({ input }: CreateCoachArgs) => {
  return db.coach.create({
    data: input,
  })
}

interface UpdateCoachArgs {
  where: Prisma.CoachWhereUniqueInput
  input: Prisma.CoachUpdateInput
}

export const updateCoach = ({ id, input }: UpdateCoachArgs) => {
  return db.coach.update({
    data: input,
    where: { id },
  })
}

export const deleteCoach = ({ id }: Prisma.CoachWhereUniqueInput) => {
  return db.coach.delete({
    where: { id },
  })
}

export const Coach = {
  team: (_obj, { root }: ResolverArgs<Prisma.CoachWhereUniqueInput>) =>
    db.coach.findUnique({ where: { id: root.id } }).team(),
}
