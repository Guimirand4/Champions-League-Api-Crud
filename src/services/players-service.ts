
import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";


export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;
    if(data){
       response = await HttpResponse.ok(data);
    }else{
        response = await HttpResponse.noContent();
    }
    
    return response;
};

export const getPlayerByIdService = async (id: number) => {
    //pedir pro repositorio de dados
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;
    if(data){
        response = await HttpResponse.ok(data);
    }else{
        response = await HttpResponse.noContent();
    }
    return response;
};

export const createPlayerService = async (player: PlayerModel ) => {
    //verifica se esta vazio
    let response = null;
    if(player){
        await PlayerRepository.insertPlayer(player);
        response = await HttpResponse.created();
    }else{
       response = await HttpResponse.badRequest();
    }
    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted = await PlayerRepository.deletePlayerById(id); 
    if(isDeleted === false){
        return response = await HttpResponse.badRequest();
    }else{
        response = await HttpResponse.ok({message: "deleted"});
    }
    
    return response;
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    let response = null;
    if(!data){
        return response = await HttpResponse.badRequest();
    }
     response = await HttpResponse.ok(data);
    return response;

}


