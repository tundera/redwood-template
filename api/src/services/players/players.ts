import { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/api/dist/types'
import { db } from 'src/lib/db'

export const players = () => {
  return db.player.findMany()
}

export const player = ({ id }: Prisma.PlayerWhereUniqueInput) => {
  return db.player.findUnique({
    where: { id },
  })
}

interface CreatePlayerArgs {
  input: Prisma.PlayerCreateInput
}

export const createPlayer = ({ input }: CreatePlayerArgs) => {
  return db.player.create({
    data: input,
  })
}

interface UpdatePlayerArgs {
  where: Prisma.PlayerWhereUniqueInput
  input: Prisma.PlayerUpdateInput
}

export const updatePlayer = ({ id, input }: UpdatePlayerArgs) => {
  return db.player.update({
    data: input,
    where: { id },
  })
}

export const deletePlayer = ({ id }: Prisma.PlayerWhereUniqueInput) => {
  return db.player.delete({
    where: { id },
  })
}

export const Player = {
  team: (_obj, { root }: ResolverArgs<Prisma.PlayerWhereUniqueInput>) =>
    db.player.findUnique({ where: { id: root.id } }).team(),
}
