import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";


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
        response = HttpResponse.created();
    }else{
       response =  HttpResponse.badRequest();
    }
    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    
    await PlayerRepository.deletePlayerById(id);
    response = HttpResponse.ok({message: "deleted"});
    return response;
}


